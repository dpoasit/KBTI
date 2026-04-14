import { Effects, UserScores, ResultData, Badge } from '../types';
import { RESULTS } from './results';
import { BADGES } from './questions';

export function calculateScores(answers: Effects[]): UserScores {
  const total: UserScores = {
    cb: 0, sm: 0, eq: 0, ai: 0, tn: 0,
    cam: 0, soul: 0, spend: 0, tea: 0, live: 0, stash: 0, loud: 0, niche: 0
  };

  answers.forEach(ans => {
    Object.keys(ans).forEach(key => {
      (total as any)[key] += (ans as any)[key];
    });
  });

  return total;
}

export function getPrimaryType(scores: UserScores): ResultData {
  const code = [
    scores.cb <= 0 ? 'C' : 'B',
    scores.sm <= 0 ? 'S' : 'M',
    scores.eq <= 0 ? 'E' : 'Q',
    scores.ai <= 0 ? 'A' : 'I',
    scores.tn <= 0 ? 'T' : 'N'
  ].join('');

  return RESULTS[code] || RESULTS['CSEAT'];
}

export function getSecondaryType(scores: UserScores, primaryCode: string): ResultData {
  let minDistance = Infinity;
  let secondaryCode = 'CSEAT';

  Object.keys(RESULTS).forEach(code => {
    if (code === primaryCode) return;

    // Simple distance based on binary match
    let distance = 0;
    for (let i = 0; i < 5; i++) {
      if (code[i] !== primaryCode[i]) distance += 1;
    }

    if (distance < minDistance) {
      minDistance = distance;
      secondaryCode = code;
    }
  });

  return RESULTS[secondaryCode];
}

export function getAxisPercents(scores: UserScores) {
  // Max possible absolute value for each axis is roughly 32 * 2 = 64
  // But let's use a more realistic normalization
  const normalize = (val: number) => {
    const p = Math.max(0, Math.min(100, Math.round(50 + (val / 30) * 50)));
    return p;
  };

  return {
    cb: normalize(scores.cb),
    sm: normalize(scores.sm),
    eq: normalize(scores.eq),
    ai: normalize(scores.ai),
    tn: normalize(scores.tn)
  };
}

export function getDerivedPercents(scores: UserScores) {
  // Max possible for derived is roughly 32 * 3 = 96
  const normalize = (val: number) => Math.max(0, Math.min(100, Math.round((val / 60) * 100)));

  return {
    cam: normalize(scores.cam),
    soul: normalize(scores.soul),
    spend: normalize(scores.spend),
    tea: normalize(scores.tea),
    live: normalize(scores.live),
    stash: normalize(scores.stash),
    loud: normalize(scores.loud),
    niche: normalize(scores.niche)
  };
}

export function getUnlockedBadges(scores: UserScores): Badge[] {
  const derived = getDerivedPercents(scores);
  const axis = getAxisPercents(scores);

  return BADGES.filter(badge => {
    // Evaluate condition string (simple parser)
    // Example: "cam >= 75 && ai > 0"
    try {
      const context = { ...derived, ...axis };
      const condition = badge.condition
        .replace(/([a-z]+)/g, 'context.$1')
        .replace(/&&/g, '&&')
        .replace(/>=/g, '>=')
        .replace(/>/g, '>');
      
      return new Function('context', `return ${condition}`)(context);
    } catch (e) {
      return false;
    }
  });
}

export function generateMatchScore(scores: UserScores): number {
  const dominantGap = Math.abs(scores.cb) + Math.abs(scores.sm) + Math.abs(scores.eq) + Math.abs(scores.ai) + Math.abs(scores.tn);
  return Math.max(70, Math.min(97, 70 + Math.round(dominantGap / 2)));
}
