import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUESTIONS } from './lib/questions';
import { RESULTS } from './lib/results';
import { 
  calculateScores, 
  getPrimaryType, 
  getSecondaryType, 
  getAxisPercents, 
  getDerivedPercents, 
  getUnlockedBadges, 
  generateMatchScore 
} from './lib/utils';
import { Effects, ResultData, UserScores, Badge } from './types';
import { toPng } from 'html-to-image';
import { ArrowLeft, Settings, Trophy, User, Download, RotateCcw, Search, ChevronRight, AlertTriangle, Briefcase, Camera, Heart, ShoppingCart, Megaphone, Zap, Sparkles } from 'lucide-react';

type View = 'home' | 'quiz' | 'result' | 'gallery';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Effects[]>([]);
  const [finalResult, setFinalResult] = useState<{
    primary: ResultData;
    secondary: ResultData;
    scores: UserScores;
    match: number;
    axisPercents: any;
    derivedPercents: any;
    badges: Badge[];
  } | null>(null);

  const posterRef = useRef<HTMLDivElement>(null);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('kbti_progress');
    if (savedProgress) {
      const { index, ans } = JSON.parse(savedProgress);
      setCurrentQuestionIndex(index);
      setAnswers(ans);
      // Auto-resume if they were in the middle of a quiz
      if (index > 0 && index < QUESTIONS.length) {
        setView('quiz');
      }
    }
    
    const savedResult = localStorage.getItem('kbti_result');
    if (savedResult) {
      setFinalResult(JSON.parse(savedResult));
    }
  }, []);

  const saveProgress = (index: number, ans: Effects[]) => {
    localStorage.setItem('kbti_progress', JSON.stringify({ index, ans }));
  };

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setView('quiz');
  };

  const handleAnswer = (effects: Effects) => {
    const newAnswers = [...answers, effects];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      saveProgress(nextIndex, newAnswers);
    } else {
      // Quiz finished
      const scores = calculateScores(newAnswers);
      const primary = getPrimaryType(scores);
      const secondary = getSecondaryType(scores, primary.code);
      const match = generateMatchScore(scores);
      const axisPercents = getAxisPercents(scores);
      const derivedPercents = getDerivedPercents(scores);
      const badges = getUnlockedBadges(scores);

      setFinalResult({
        primary,
        secondary,
        scores,
        match,
        axisPercents,
        derivedPercents,
        badges
      });
      localStorage.setItem('kbti_result', JSON.stringify({
        primary,
        secondary,
        scores,
        match,
        axisPercents,
        derivedPercents,
        badges
      }));
      setView('result');
      localStorage.removeItem('kbti_progress');
    }
  };

  const goBack = () => {
    if (currentQuestionIndex > 0) {
      const nextIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(nextIndex);
      const newAnswers = answers.slice(0, -1);
      setAnswers(newAnswers);
      saveProgress(nextIndex, newAnswers);
    } else {
      setView('home');
    }
  };

  const exportPoster = async () => {
    if (posterRef.current === null) return;
    try {
      const dataUrl = await toPng(posterRef.current, { cacheBust: true });
      const link = document.createElement('a');
      link.download = `KBTI_${finalResult?.primary.name}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('oops, something went wrong!', err);
    }
  };

  const copyShareText = (platform: 'moments' | 'xhs' | 'weibo') => {
    if (!finalResult) return;
    const text = finalResult.primary.share[platform];
    navigator.clipboard.writeText(text).then(() => {
      alert('文案已复制到剪贴板！');
    });
  };

  // --- Views ---

  const HomeView = () => (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-16 pb-32 min-h-screen y2k-grid px-6"
    >
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 pt-12 md:pt-24">
        <div className="w-full md:w-3/5 space-y-8 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label text-xs tracking-widest uppercase">
            Version 2.0 Lab Edition
          </div>
          <h1 className="font-headline font-black text-5xl md:text-8xl tracking-tighter leading-tight text-on-background">
            KBTI | <span className="text-primary italic">你的韩娱</span><br/>追星人格
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mx-auto md:mx-0">
            MBTI 太正经，普通追星测试又太浅。现在测测你在韩娱里到底是什么成分。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button 
              onClick={startQuiz}
              className="px-10 py-5 rounded-full bg-primary text-on-primary font-headline font-bold text-lg shadow-[0_20px_40px_rgba(87,94,112,0.15)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              开始测我的韩娱成分
            </button>
            <button 
              onClick={() => setView('gallery')}
              className="px-10 py-5 rounded-full silver-gradient-border text-primary font-headline font-bold text-lg hover:bg-surface-container-low transition-all duration-300"
            >
              先看看 32 种发病方式
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-2/5 aspect-square relative flex items-center justify-center">
          <div className="absolute w-[80%] h-[80%] rounded-xl rotate-12 bg-gradient-to-br from-primary-container to-white opacity-40 blur-2xl"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-64 h-64 rounded-xl silver-gradient-border rotate-[-6deg] overflow-hidden flex items-center justify-center shadow-2xl">
              <div className="w-full h-full bg-surface-container-lowest flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4 w-full h-full opacity-20">
                  <div className="bg-primary-fixed-dim rounded-full"></div>
                  <div className="bg-tertiary-container rounded-full self-end h-12 w-12 ml-auto"></div>
                  <div className="bg-outline-variant rounded-full h-8 w-8"></div>
                  <div className="bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-10 right-0 w-40 h-40 rounded-full bg-white shadow-xl flex flex-col items-center justify-center border border-surface-variant rotate-[15deg]">
              <span className="font-label text-xs text-primary font-bold">STYLING</span>
              <span className="font-headline font-black text-3xl">CO-1</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-24 pb-12 text-center">
        <p className="font-label text-[10px] text-zinc-400 leading-relaxed uppercase tracking-widest max-w-2xl mx-auto">
          Disclaimer: 本测试仅供娱乐，不代表真实心理诊断，不适用于相亲、入职、吵架、分手、招魂、算命或人生判决。
        </p>
      </footer>
    </motion.div>
  );

  const QuizView = () => {
    const question = QUESTIONS[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;

    const prompts = [
      "世界已经够乱了，起码把题做完整。",
      "做完才会放你看结果，别想中途跑路。",
      "不要纠结太久，你的韩娱病根本藏不住。",
      "选你最像自己的那句，不要选你想装成的样子。"
    ];
    const prompt = prompts[currentQuestionIndex % prompts.length];

    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }} 
        animate={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: -20 }}
        className="pt-24 pb-32 px-6 max-w-2xl mx-auto w-full flex flex-col min-h-screen"
      >
        <div className="mb-12 space-y-4">
          <div className="flex justify-between items-end">
            <span className="font-label text-sm tracking-tighter text-outline opacity-70">QUIZ PROGRESS</span>
            <span className="font-label text-2xl font-bold text-primary tracking-tight">
              {String(currentQuestionIndex + 1).padStart(2, '0')} / {QUESTIONS.length}
            </span>
          </div>
          <div className="h-[2px] w-full bg-outline-variant/30 relative rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="absolute top-0 left-0 h-full bg-primary"
            />
          </div>
          <p className="text-[10px] text-outline text-center font-label tracking-widest uppercase opacity-60">
            {prompt}
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex-grow flex flex-col"
          >
            <div className="bg-white rounded-xl p-8 mb-8 border border-zinc-100 shadow-sm relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-tertiary-container/30 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary mb-4 font-bold">
                  Question {String(currentQuestionIndex + 1).padStart(2, '0')}
                </div>
                <h2 className="font-headline text-2xl md:text-3xl font-bold leading-tight text-on-surface">
                  {question.text}
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              {question.options.map((opt, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleAnswer(opt.effects)}
                  className="group w-full text-left p-6 rounded-full bg-white border border-zinc-100 transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center gap-6 hover:border-primary/20 hover:shadow-md"
                >
                  <span className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center font-label text-sm font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-grow font-medium text-on-surface-variant group-hover:text-on-surface">
                    {opt.text}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={goBack}
            className="flex items-center gap-2 font-label text-xs tracking-widest text-outline uppercase hover:text-primary transition-colors py-2 px-4"
          >
            <ArrowLeft size={14} />
            Previous Question
          </button>
        </div>
      </motion.div>
    );
  };

  const ResultView = () => {
    if (!finalResult) return null;
    const { primary, secondary, match, axisPercents, derivedPercents, badges } = finalResult;

    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="pt-24 pb-32 px-6 max-w-2xl mx-auto"
      >
        <section className="mb-12 text-center md:text-left">
          <div 
            className="inline-block px-6 py-1 rounded-full font-label text-sm tracking-tighter mb-4 shadow-sm"
            style={{ backgroundColor: `${primary.color}20`, color: primary.color }}
          >
            TYPE: {primary.code}
          </div>
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-background leading-none mb-6">
            {primary.name}
          </h2>
          <div className="flex items-baseline gap-3 mb-8 justify-center md:justify-start">
            <span className="font-label text-on-surface-variant">拿捏度</span>
            <span className="font-headline text-4xl font-bold text-primary">{match}%</span>
          </div>
        </section>

        <div className="bg-white rounded-xl p-8 mb-10 relative overflow-hidden border border-zinc-100 shadow-sm">
          <p className="font-headline text-2xl font-bold italic leading-tight text-on-surface">
            “{primary.oneLiner}”
          </p>
        </div>

        <article className="mb-12 space-y-6">
          <p className="text-lg leading-relaxed text-on-surface-variant font-medium">
            {primary.longText}
          </p>
          <div className="flex items-center gap-4 py-4 border-l-4 border-primary-fixed pl-6 bg-surface-container">
            <div>
              <p className="font-label text-xs uppercase text-outline mb-1">SECONDARY TYPE / 副人格</p>
              <p className="font-headline font-bold text-xl">{secondary.name}</p>
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="bg-white p-6 rounded-lg col-span-2 border border-zinc-100">
            <h3 className="font-label text-xs uppercase tracking-widest text-outline mb-6">CORE AXIS / 核心轴</h3>
            <div className="space-y-8">
              {[
                { label: 'C｜团脑', rLabel: 'B｜本命脑', val: axisPercents.cb },
                { label: 'S｜舞台脑', rLabel: 'M｜氛围脑', val: axisPercents.sm },
                { label: 'E｜外放脑', rLabel: 'Q｜潜伏脑', val: axisPercents.eq },
                { label: 'A｜考古脑', rLabel: 'I｜一眼上头脑', val: axisPercents.ai },
                { label: 'T｜大势脑', rLabel: 'N｜反骨脑', val: axisPercents.tn },
              ].map((axis, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-end text-[10px] font-label font-bold uppercase">
                    <div className={`flex flex-col ${axis.val < 50 ? 'text-primary' : 'text-outline opacity-40'}`}>
                      <span>{axis.label}</span>
                      {axis.val < 50 && <span className="text-lg font-headline tracking-tighter">{100 - axis.val}%</span>}
                    </div>
                    <div className={`flex flex-col items-end ${axis.val >= 50 ? 'text-primary' : 'text-outline opacity-40'}`}>
                      <span>{axis.rLabel}</span>
                      {axis.val >= 50 && <span className="text-lg font-headline tracking-tighter">{axis.val}%</span>}
                    </div>
                  </div>
                  <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 flex justify-center">
                      <div className="w-[1px] h-full bg-zinc-200"></div>
                    </div>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${axis.val}%` }}
                      className="h-full bg-primary rounded-full relative z-10"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-100/50 p-6 rounded-lg border border-zinc-100">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase size={16} className="text-primary" />
              <span className="font-label text-xs font-bold uppercase">饭圈工位</span>
            </div>
            <p className="font-headline font-bold text-xl">{primary.roles[0]}</p>
          </div>

          <div className="bg-zinc-100/50 p-6 rounded-lg border border-zinc-100">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle size={16} className="text-error" />
              <span className="font-label text-xs font-bold uppercase">危险行为</span>
            </div>
            <p className="font-headline font-bold text-xl">{primary.risks[0]}</p>
          </div>

          <div className="bg-white p-6 rounded-lg col-span-2 border border-zinc-100">
            <h3 className="font-label text-xs uppercase tracking-widest text-outline mb-6">DIMENSIONS / 维度数据</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: '镜头税', val: derivedPercents.cam, icon: Camera },
                { label: '团魂', val: derivedPercents.soul, icon: Heart },
                { label: '氪金力', val: derivedPercents.spend, icon: ShoppingCart },
                { label: '发疯值', val: derivedPercents.loud, icon: Megaphone },
              ].map((d, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                  <d.icon size={14} className="mx-auto mb-2 text-outline opacity-50" />
                  <p className="font-label text-[10px] text-outline mb-1">{d.label}</p>
                  <p className="font-headline font-bold text-lg">{(d.val / 10).toFixed(1)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {badges.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {badges.map(badge => (
              <div key={badge.id} className="flex flex-col items-center gap-2 max-w-[80px] text-center">
                <div className="w-16 h-16 rounded-full bg-tertiary-container flex items-center justify-center border border-white shadow-sm">
                  <Zap size={24} className="text-on-tertiary-container" />
                </div>
                <span className="font-label text-[10px] uppercase font-bold text-outline leading-tight">{badge.name}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-4 mb-12">
          <div className="grid grid-cols-3 gap-2 mb-4">
            <button onClick={() => copyShareText('moments')} className="py-3 rounded-xl bg-zinc-100 text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors">朋友圈</button>
            <button onClick={() => copyShareText('xhs')} className="py-3 rounded-xl bg-zinc-100 text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors">小红书</button>
            <button onClick={() => copyShareText('weibo')} className="py-3 rounded-xl bg-zinc-100 text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors">微博</button>
          </div>
          <button 
            onClick={exportPoster}
            className="w-full h-16 rounded-full bg-primary text-on-primary font-bold text-lg flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-lg shadow-primary-fixed/20"
          >
            <Download size={20} />
            保存我的发病报告
          </button>
          <button 
            onClick={() => setView('home')}
            className="w-full h-16 rounded-full bg-transparent border-2 border-outline-variant text-on-surface font-bold text-lg flex items-center justify-center gap-3 transition-all hover:bg-surface-container-highest"
          >
            <RotateCcw size={20} />
            重新测一次
          </button>
        </div>

        {/* Hidden Poster for Export */}
        <div className="fixed left-[-9999px] top-0">
          <div 
            ref={posterRef}
            className="w-[1080px] h-[1920px] bg-background p-20 flex flex-col relative y2k-grid"
          >
            <div className="flex justify-between items-start mb-20">
              <div className="text-4xl font-black tracking-[0.3em] font-headline">K-BIAS TEST</div>
              <div className="font-label text-2xl font-bold text-outline">KBTI-2026</div>
            </div>

            <div className="flex-grow flex flex-col justify-center">
              <div className="mb-12">
                <div 
                  className="inline-block px-10 py-3 rounded-full font-label text-2xl tracking-tighter mb-8"
                  style={{ backgroundColor: `${primary.color}20`, color: primary.color }}
                >
                  TYPE: {primary.code}
                </div>
                <h2 className="font-headline text-[160px] font-black tracking-tighter leading-none mb-12">
                  {primary.name}
                </h2>
                <div className="flex items-baseline gap-6">
                  <span className="font-label text-4xl text-on-surface-variant">拿捏度</span>
                  <span className="font-headline text-8xl font-bold text-primary">{match}%</span>
                </div>
              </div>

              <div className="bg-white rounded-[4rem] p-20 mb-20 border border-zinc-100 shadow-xl">
                <p className="font-headline text-6xl font-bold italic leading-tight text-on-surface">
                  “{primary.oneLiner}”
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12">
                <div className="bg-zinc-100/50 p-12 rounded-[3rem]">
                  <p className="font-label text-2xl font-bold uppercase text-outline mb-4">饭圈工位</p>
                  <p className="font-headline font-bold text-5xl">{primary.roles[0]}</p>
                </div>
                <div className="bg-zinc-100/50 p-12 rounded-[3rem]">
                  <p className="font-label text-2xl font-bold uppercase text-outline mb-4">危险行为</p>
                  <p className="font-headline font-bold text-5xl">{primary.risks[0]}</p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-20 border-t border-zinc-200 flex justify-between items-end">
              <div className="space-y-4">
                <p className="font-label text-2xl text-outline uppercase tracking-widest">Scan to test your k-bias</p>
                <div className="w-40 h-40 bg-zinc-200 rounded-xl"></div>
              </div>
              <div className="text-right">
                <p className="font-headline text-4xl font-black italic text-primary">ARE YOU ADDICTED TO PERFECTION?</p>
                <p className="font-label text-2xl text-outline mt-2">KBTI | 你的韩娱追星人格</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const GalleryView = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredResults = Object.values(RESULTS).filter(res => 
      res.name.includes(searchTerm) || 
      res.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.oneLiner.includes(searchTerm)
    );

    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="pt-24 pb-32 px-6 max-w-7xl mx-auto"
      >
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <p className="font-label text-sm uppercase tracking-widest text-primary font-bold">The Archives Vol. 1</p>
              <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-none text-on-surface">32 型发病图鉴</h2>
            </div>
            <div className="w-full md:w-80">
              <div className="relative group">
                <input 
                  className="w-full bg-white rounded-full py-4 pl-12 pr-6 border border-zinc-100 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/50 shadow-sm font-label" 
                  placeholder="搜搜你的成分" 
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
              </div>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-on-surface-variant text-lg leading-relaxed">
            欢迎来到人格实验室的地下室。这里没有虚伪的夸赞，只有血淋淋的真相。每一张卡片都是一次精准的诊断，每一串代码都是灵魂的通缉令。
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((res, i) => (
            <div 
              key={res.code}
              className="bg-white p-8 rounded-[2rem] border border-zinc-100 group hover:-translate-y-2 transition-all duration-300 shadow-sm"
            >
              <div className="flex justify-between items-start mb-10">
                <span className="font-label text-xs bg-zinc-100 text-outline px-3 py-1 rounded-full font-bold">TYPE {String(i + 1).padStart(2, '0')}</span>
                <ChevronRight className="text-zinc-200 group-hover:text-primary transition-colors" />
              </div>
              <div className="space-y-4">
                <p className="font-label text-2xl font-bold tracking-tight text-primary">{res.code}</p>
                <h3 className="text-3xl font-headline font-bold text-on-surface leading-tight">{res.name}</h3>
                <p className="text-on-surface-variant text-sm font-medium leading-relaxed line-clamp-2">{res.oneLiner}</p>
              </div>
            </div>
          ))}
          {filteredResults.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="font-label text-outline uppercase tracking-widest">未找到相关成分，你可能还没入坑。</p>
            </div>
          )}
        </div>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => setView('home')}
            className="px-8 py-4 rounded-full bg-zinc-900 text-white font-bold flex items-center gap-3 hover:bg-zinc-800 transition-colors"
          >
            <ArrowLeft size={18} />
            返回首页
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 glass-nav border-b border-zinc-100 flex justify-between items-center px-6 h-16">
        <div 
          className="text-lg font-black tracking-widest text-zinc-900 font-headline cursor-pointer"
          onClick={() => setView('home')}
        >
          K-BIAS TEST
        </div>
        <div className="flex items-center gap-6">
          {view !== 'home' && (
            <button onClick={() => setView('home')} className="text-zinc-400 hover:text-primary transition-colors">
              <ArrowLeft size={20} />
            </button>
          )}
          <Settings size={20} className="text-pink-600 cursor-pointer" />
        </div>
      </header>

      <AnimatePresence mode="wait">
        {view === 'home' && <HomeView key="home" />}
        {view === 'quiz' && <QuizView key="quiz" />}
        {view === 'result' && <ResultView key="result" />}
        {view === 'gallery' && <GalleryView key="gallery" />}
      </AnimatePresence>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pb-6 pt-2 px-6 bg-white/80 backdrop-blur-md border-t border-zinc-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-3xl">
        <button 
          onClick={() => setView('home')}
          className={`flex flex-col items-center justify-center p-3 transition-all ${view === 'home' || view === 'quiz' ? 'text-pink-600 bg-pink-50 rounded-full' : 'text-zinc-400'}`}
        >
          <Sparkles size={20} />
          <span className="text-[10px] uppercase font-bold mt-1">Quiz</span>
        </button>
        <button 
          onClick={() => setView('gallery')}
          className={`flex flex-col items-center justify-center p-3 transition-all ${view === 'gallery' ? 'text-pink-600 bg-pink-50 rounded-full' : 'text-zinc-400'}`}
        >
          <Trophy size={20} />
          <span className="text-[10px] uppercase font-bold mt-1">Gallery</span>
        </button>
        <button 
          onClick={() => {
            if (finalResult) {
              setView('result');
            } else {
              setView('home');
            }
          }}
          className={`flex flex-col items-center justify-center p-3 transition-all ${view === 'result' ? 'text-pink-600 bg-pink-50 rounded-full' : 'text-zinc-400'}`}
        >
          <User size={20} />
          <span className="text-[10px] uppercase font-bold mt-1">Me</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
