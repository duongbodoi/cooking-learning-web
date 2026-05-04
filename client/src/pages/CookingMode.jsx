import React, { useState, useEffect, useContext, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import { getRecipeById } from '../utils/recipeStorage';
import { AuthContext } from '../context/AuthContext';
import { 
  CheckCircle2, Circle, ArrowLeft, ArrowRight, Play, 
  ChefHat, Award, Star, Utensils, Home, Timer, Mic
} from 'lucide-react';

const CookingMode = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [recipe, setRecipe] = useState(null);
  const [phase, setPhase] = useState(1); // 1: Preparation, 2: Cooking, 3: Completed
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [timerDurationSeconds, setTimerDurationSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isSettingNewTimer, setIsSettingNewTimer] = useState(true);
  const [timerIconPos, setTimerIconPos] = useState({ x: 24, y: 240 });
  const [draggingTarget, setDraggingTarget] = useState(null);
  const dragStateRef = useRef({ offsetX: 0, offsetY: 0 });
  const dragMovedRef = useRef(false);

  useEffect(() => {
    const data = getRecipeById(id);
    if (!data) {
      navigate('/');
    } else {
      setRecipe(data);
    }
  }, [id, navigate]);

  useEffect(() => {
    if (!isTimerRunning || remainingSeconds <= 0) return undefined;

    const ticker = window.setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          window.clearInterval(ticker);
          setIsTimerRunning(false);
          alert('Timer is up!');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(ticker);
  }, [isTimerRunning, remainingSeconds]);

  useEffect(() => {
    if (!draggingTarget) return undefined;

    const getPoint = (event) => {
      if (event.touches && event.touches.length > 0) {
        return { x: event.touches[0].clientX, y: event.touches[0].clientY };
      }
      return { x: event.clientX, y: event.clientY };
    };

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const onMove = (event) => {
      const point = getPoint(event);
      if (!point) return;
      event.preventDefault();
      dragMovedRef.current = true;

      if (draggingTarget === 'icon') {
        const size = 48;
        const nextX = clamp(point.x - dragStateRef.current.offsetX, 8, window.innerWidth - size - 8);
        const nextY = clamp(point.y - dragStateRef.current.offsetY, 8, window.innerHeight - size - 8);
        setTimerIconPos({ x: nextX, y: nextY });
      }
    };

    const onEnd = () => {
      setDraggingTarget(null);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onEnd);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [draggingTarget]);

  if (!recipe) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  );

  const toggleIngredient = (idx) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleStartCooking = () => {
    setPhase(2);
    // Scroll to top
    window.scrollTo(0, 0);
  };

  const nextStep = () => {
    if (currentStep < recipe.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setPhase(3);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else {
      setPhase(1); // Back to prep
    }
  };

  const currentStepData = recipe?.steps?.[currentStep];
  const currentStepTitle =
    typeof currentStepData === 'object' && currentStepData?.title
      ? currentStepData.title
      : `Step ${currentStep + 1}`;
  const currentStepDescription =
    typeof currentStepData === 'string'
      ? currentStepData
      : currentStepData?.description || '';
  const currentStepImage =
    typeof currentStepData === 'object' && currentStepData?.imagePreview
      ? currentStepData.imagePreview
      : recipe?.image;

  const progressPercent = recipe?.steps?.length
    ? ((currentStep + 1) / recipe.steps.length) * 100
    : 0;

  const formatTwoDigits = (value) => value.toString().padStart(2, '0');

  const remainingHours = Math.floor(remainingSeconds / 3600);
  const remainingMinutes = Math.floor((remainingSeconds % 3600) / 60);
  const remainingDisplaySeconds = remainingSeconds % 60;

  const onWheelHour = (event) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? -1 : 1;
    setTimerHours((prev) => Math.min(3, Math.max(0, prev + direction)));
  };

  const onWheelMinute = (event) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? -1 : 1;
    setTimerMinutes((prev) => {
      const next = prev + direction;
      if (next > 59) return 0;
      if (next < 0) return 59;
      return next;
    });
  };

  const onWheelSecond = (event) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? -1 : 1;
    setTimerSeconds((prev) => {
      const next = prev + direction;
      if (next > 60) return 0;
      if (next < 0) return 60;
      return next;
    });
  };

  const openTimerDialog = () => {
    if (remainingSeconds > 0) {
      setTimerHours(Math.floor(remainingSeconds / 3600));
      setTimerMinutes(Math.floor((remainingSeconds % 3600) / 60));
      setTimerSeconds(remainingSeconds % 60);
      setIsSettingNewTimer(false);
    } else {
      setIsSettingNewTimer(true);
    }
    setIsTimerOpen(true);
  };

  const closeTimerDialog = () => setIsTimerOpen(false);

  const startTimer = () => {
    const totalSeconds = timerHours * 3600 + timerMinutes * 60 + timerSeconds;
    if (totalSeconds <= 0) return;
    setRemainingSeconds(totalSeconds);
    setTimerDurationSeconds(totalSeconds);
    setIsTimerRunning(true);
    setIsSettingNewTimer(false);
  };

  const togglePauseTimer = () => {
    if (remainingSeconds <= 0) return;
    setIsTimerRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setRemainingSeconds(0);
    setTimerDurationSeconds(0);
    setTimerHours(0);
    setTimerMinutes(0);
    setTimerSeconds(0);
    setIsSettingNewTimer(true);
  };

  const startNewTimerSetup = () => {
    setIsTimerRunning(false);
    setRemainingSeconds(0);
    setTimerDurationSeconds(0);
    setTimerHours(0);
    setTimerMinutes(0);
    setTimerSeconds(0);
    setIsSettingNewTimer(true);
  };

  const beginDrag = (target, event) => {
    const point = event.touches && event.touches.length > 0 ? event.touches[0] : event;
    if (!point) return;
    const currentPos = timerIconPos;
    dragStateRef.current = {
      offsetX: point.clientX - currentPos.x,
      offsetY: point.clientY - currentPos.y,
    };
    dragMovedRef.current = false;
    setDraggingTarget(target);
  };

  const handleTimerIconClick = () => {
    if (dragMovedRef.current) {
      dragMovedRef.current = false;
      return;
    }
    if (isTimerOpen) {
      closeTimerDialog();
    } else {
      openTimerDialog();
    }
  };

  const TIMER_ICON_SIZE = 48;
  const TIMER_PANEL_WIDTH = Math.min(window.innerWidth * 0.92, 340);
  const TIMER_PANEL_HEIGHT = 390;
  const TIMER_PANEL_GAP = 8;
  const timerPanelLeft = Math.max(
    8,
    Math.min(
      timerIconPos.x + TIMER_ICON_SIZE / 2 - TIMER_PANEL_WIDTH / 2,
      window.innerWidth - TIMER_PANEL_WIDTH - 8
    )
  );
  const timerPanelTop = Math.max(
    8,
    Math.min(
      timerIconPos.y + TIMER_ICON_SIZE + TIMER_PANEL_GAP,
      window.innerHeight - TIMER_PANEL_HEIGHT - 8
    )
  );
  const timerProgressPercent = timerDurationSeconds > 0
    ? Math.max(0, Math.min(100, (remainingSeconds / timerDurationSeconds) * 100))
    : 0;

  return (
    <div className="min-h-screen bg-secondary/5 font-sans flex flex-col">
      {phase !== 2 && <Header />}

      {/* PHASE 1: PREPARATION */}
      {phase === 1 && (
        <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => navigate(`/recipe/${recipe.id}`)}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-semibold bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100"
            >
              <ArrowLeft size={20} /> Back to Recipe
            </button>
            <div className="flex items-center gap-2 text-gray-500 font-medium">
              <span className="text-primary font-bold">Phase 1</span> / 3
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-10 border-b border-gray-100 flex flex-col md:flex-row gap-6 items-center bg-gray-50/50">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
                <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-primary font-extrabold uppercase tracking-widest text-sm mb-1 line-clamp-1">Preparation</p>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{recipe.title}</h1>
                <p className="text-gray-500 font-medium">Check your ingredients before we start cooking.</p>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Utensils className="text-primary" size={24} /> 
                Ingredients List
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recipe.ingredients?.map((ing, idx) => {
                  const isChecked = checkedIngredients[idx];
                  return (
                    <div 
                      key={idx} 
                      onClick={() => toggleIngredient(idx)}
                      className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer select-none
                        ${isChecked 
                          ? 'border-primary/30 bg-primary/5 shadow-inner' 
                          : 'border-transparent bg-gray-50 hover:bg-gray-100 shadow-sm hover:shadow'}`}
                    >
                      <button className="flex-shrink-0 transition-transform active:scale-90">
                        {isChecked 
                          ? <CheckCircle2 size={28} className="fill-primary text-white" /> 
                          : <Circle size={28} className="text-gray-300" />}
                      </button>
                      <div className="flex-1">
                        <p className={`font-semibold text-lg transition-colors ${isChecked ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                          {ing.name}
                        </p>
                        <p className={`text-sm font-medium ${isChecked ? 'text-gray-400 line-through' : 'text-primary'}`}>
                          {ing.amount}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 flex justify-center">
                <button
                  onClick={handleStartCooking}
                  className="group relative flex items-center gap-3 bg-gradient-to-r from-primary to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Play size={24} className="fill-white" /> Let's Cook Now
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PHASE 2: COOKING MODE */}
      {phase === 2 && (
        <div className="flex-1 bg-[#111317] text-white px-4 pb-6 pt-4 sm:pt-6 animate-fade-in">
          <div className="mx-auto w-full max-w-3xl">
            {/* Top bar */}
            <div className="mb-5 flex items-center justify-between">
              <button
                onClick={prevStep}
                className="h-11 w-11 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition hover:bg-white/10"
                aria-label={currentStep === 0 ? 'Back to prep' : 'Previous step'}
              >
                <ArrowLeft size={20} />
              </button>

              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white/90 backdrop-blur-md">
                Step {currentStep + 1} / {recipe.steps.length}
              </div>

              <div className="h-11 w-11"></div>
            </div>

            {/* Main image */}
            <div className="relative mb-[-36px] overflow-hidden rounded-[18px] shadow-[0_16px_40px_rgba(0,0,0,0.45)] border border-white/10">
              <div className="aspect-video w-full bg-black/50">
                <img
                  src={currentStepImage}
                  alt={currentStepTitle}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/25 to-transparent"></div>
            </div>

            {/* Floating glass content card */}
            <div className="relative z-10 rounded-[20px] border border-white/15 bg-white/10 p-5 sm:p-6 backdrop-blur-xl shadow-[0_16px_38px_rgba(0,0,0,0.35)]">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb170]">Step {currentStep + 1}</p>
              <h3 className="text-xl sm:text-2xl font-semibold leading-snug text-white">{currentStepTitle}</h3>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-white/85">
                {currentStepDescription}
              </p>
            </div>

            {/* Progress bar */}
            <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#ff7a00] to-[#ffb066] transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Bottom controls */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                onClick={prevStep}
                className="h-12 rounded-2xl border border-white/20 bg-white/5 text-sm sm:text-base font-semibold text-white/90 transition hover:bg-white/10"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="h-12 rounded-2xl bg-gradient-to-r from-[#ff7a00] to-[#ffa24d] text-sm sm:text-base font-semibold text-white shadow-[0_10px_30px_rgba(255,122,0,0.38)] transition hover:brightness-110 active:scale-[0.99] flex items-center justify-center gap-2"
              >
                {currentStep < recipe.steps.length - 1 ? (
                  <>Next Step <ArrowRight size={18} /></>
                ) : (
                  <>Finish Cooking <CheckCircle2 size={18} /></>
                )}
              </button>
            </div>

            {(remainingSeconds > 0 || isTimerRunning) && (
              <div className="mt-4 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center justify-between gap-3 text-sm sm:text-base">
                  <p className="font-medium text-white/90">
                    Timer: {formatTwoDigits(remainingHours)}:{formatTwoDigits(remainingMinutes)}:{formatTwoDigits(remainingDisplaySeconds)}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePauseTimer}
                      className="rounded-xl bg-white/10 px-3 py-1.5 text-xs sm:text-sm font-semibold text-white hover:bg-white/20"
                    >
                      {isTimerRunning ? 'Pause' : 'Resume'}
                    </button>
                    <button
                      onClick={resetTimer}
                      className="rounded-xl bg-[#ff7a00]/20 px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#ffb170] hover:bg-[#ff7a00]/30"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Optional floating controls */}
          <div className="fixed bottom-6 right-5 z-20 flex flex-col gap-3 sm:right-8">
            <button
              className="h-12 w-12 rounded-full border border-white/20 bg-[#1c2026]/80 text-white shadow-[0_10px_24px_rgba(0,0,0,0.4)] backdrop-blur-md transition hover:bg-[#242a32]"
              aria-label="Voice instruction"
            >
              <Mic size={18} className="mx-auto" />
            </button>
          </div>
        </div>
      )}

      {/* Draggable timer tool */}
      {phase === 2 && (
        <>
          {!isTimerOpen && remainingSeconds > 0 && (
            <div
              className="fixed z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#111317]/90 text-[10px] font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
              style={{
                left: `${timerIconPos.x + 4}px`,
                top: `${timerIconPos.y - 46}px`,
                backgroundImage: `conic-gradient(#ff7a00 ${timerProgressPercent}%, rgba(255,255,255,0.15) ${timerProgressPercent}% 100%)`,
              }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111317]">
                {formatTwoDigits(remainingMinutes)}:{formatTwoDigits(remainingDisplaySeconds)}
              </div>
            </div>
          )}

          <button
            type="button"
            onMouseDown={(event) => beginDrag('icon', event)}
            onTouchStart={(event) => beginDrag('icon', event)}
            onClick={handleTimerIconClick}
            className="fixed z-40 h-12 w-12 rounded-full border border-white/25 bg-[#1c2026]/90 text-white shadow-[0_10px_24px_rgba(0,0,0,0.4)] backdrop-blur-md transition hover:bg-[#242a32] cursor-grab active:cursor-grabbing"
            style={{ left: `${timerIconPos.x}px`, top: `${timerIconPos.y}px` }}
            aria-label="Open timer tool"
          >
            <Timer size={18} className="mx-auto" />
          </button>

          {isTimerOpen && (
            <div
              className="fixed z-40 w-[min(92vw,340px)] rounded-[24px] border border-white/15 bg-[#171b21]/92 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
              style={{ left: `${timerPanelLeft}px`, top: `${timerPanelTop}px` }}
            >
              <div className="mb-4 flex items-center justify-between select-none">
                <h4 className="text-base font-semibold text-white">Set cooking timer</h4>
                <div className="flex items-center gap-2">
                  <button
                    onClick={closeTimerDialog}
                    className="rounded-lg border border-white/15 bg-white/5 px-2 py-1 text-xs text-white/80 hover:bg-white/10"
                  >
                    Hide
                  </button>
                </div>
              </div>

              <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full border border-white/15 bg-gradient-to-b from-white/10 to-white/5 shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]">
                <div className="w-[86%] rounded-2xl border border-white/10 bg-[#0f1318]/70 px-4 py-5">
                  {isSettingNewTimer ? (
                    <>
                      <p className="mb-3 text-center text-xs uppercase tracking-[0.18em] text-white/55">Scroll to adjust</p>
                      <div className="flex items-center justify-center gap-2 text-white">
                        <div
                          onWheel={onWheelHour}
                          className="w-16 rounded-xl border border-white/15 bg-white/10 py-2 text-center text-3xl font-semibold select-none"
                          title="Hours (0-3)"
                        >
                          {timerHours}
                        </div>
                        <span className="text-2xl font-semibold text-white/80">:</span>
                        <div
                          onWheel={onWheelMinute}
                          className="w-16 rounded-xl border border-white/15 bg-white/10 py-2 text-center text-3xl font-semibold select-none"
                          title="Minutes (00-59)"
                        >
                          {formatTwoDigits(timerMinutes)}
                        </div>
                        <span className="text-2xl font-semibold text-white/80">:</span>
                        <div
                          onWheel={onWheelSecond}
                          className="w-16 rounded-xl border border-white/15 bg-white/10 py-2 text-center text-3xl font-semibold select-none"
                          title="Seconds (00-60)"
                        >
                          {formatTwoDigits(timerSeconds)}
                        </div>
                      </div>
                      <div className="mt-3 flex justify-center gap-5 text-[11px] uppercase tracking-[0.18em] text-white/55">
                        <span>Hour</span>
                        <span>Minute</span>
                        <span>Second</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="mb-3 text-center text-xs uppercase tracking-[0.18em] text-white/55">Countdown</p>
                      <div className="rounded-xl border border-white/15 bg-white/10 py-4 text-center">
                        <p className="text-4xl font-semibold text-white">
                          {formatTwoDigits(remainingHours)}:{formatTwoDigits(remainingMinutes)}:{formatTwoDigits(remainingDisplaySeconds)}
                        </p>
                      </div>
                      <p className="mt-3 text-center text-[11px] uppercase tracking-[0.18em] text-white/55">
                        {isTimerRunning ? 'Running' : 'Paused'}
                      </p>
                    </>
                  )}
                </div>
              </div>

              {isSettingNewTimer ? (
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button
                    onClick={closeTimerDialog}
                    className="h-10 rounded-2xl border border-white/20 bg-white/5 text-sm font-semibold text-white/90 hover:bg-white/10"
                  >
                    Minimize
                  </button>
                  <button
                    onClick={startTimer}
                    disabled={timerHours === 0 && timerMinutes === 0 && timerSeconds === 0}
                    className="h-10 rounded-2xl bg-gradient-to-r from-[#ff7a00] to-[#ffab57] text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,122,0,0.32)] hover:brightness-110 disabled:opacity-40"
                  >
                    Start Timer
                  </button>
                </div>
              ) : (
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button
                    onClick={togglePauseTimer}
                    disabled={remainingSeconds <= 0}
                    className="h-10 rounded-2xl border border-white/20 bg-white/5 text-sm font-semibold text-white/90 hover:bg-white/10 disabled:opacity-40"
                  >
                    {isTimerRunning ? 'Pause' : 'Resume'}
                  </button>
                  <button
                    onClick={startNewTimerSetup}
                    className="h-10 rounded-2xl bg-gradient-to-r from-[#ff7a00] to-[#ffab57] text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,122,0,0.32)] hover:brightness-110"
                  >
                    New Timer
                  </button>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* PHASE 3: COMPLETED */}
      {phase === 3 && (
        <div className="flex-1 container mx-auto px-4 py-12 max-w-3xl flex flex-col animate-fade-in items-center justify-center">
          
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 w-full text-center relative overflow-hidden">
            {/* Confetti decoration top */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none"></div>
            
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Award size={50} className="text-green-500" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4 tracking-tight">
              Congratulations!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              You've successfully cooked <span className="font-bold text-primary">{recipe.title}</span>. We hope it smells as amazing as it looks!
            </p>

            {/* Self Evaluation Box */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mt-10">
              <h3 className="text-xl font-bold text-gray-800 mb-2">How did you do?</h3>
              <p className="text-gray-500 text-sm mb-6">Rate your cooking success for this dish</p>
              
              <div className="flex justify-center gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setUserRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none transition-transform hover:scale-110 active:scale-95"
                  >
                    <Star
                      size={48}
                      className={`${
                        star <= (hoverRating || userRating)
                          ? 'text-yellow-400 fill-yellow-400 drop-shadow-md'
                          : 'text-gray-300'
                      } transition-colors duration-200`}
                    />
                  </button>
                ))}
              </div>
              <div className="mt-4 min-h-[1.5rem] font-medium text-primary">
                {userRating === 1 && "Need more practice! 😅"}
                {userRating === 2 && "Not bad, I can do better. 🙂"}
                {userRating === 3 && "Turned out pretty good! 😋"}
                {userRating === 4 && "Delicious! Almost perfect. 🤤"}
                {userRating === 5 && "Master Chef level! 👨‍🍳🔥"}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link 
                to={`/recipe/${recipe.id}`}
                className="px-8 py-3.5 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Back to Recipe
              </Link>
              <Link 
                to="/your-kitchen"
                className="px-8 py-3.5 rounded-xl font-bold text-white bg-primary hover:bg-orange-600 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                <Home size={20} /> View Your Kitchen
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default CookingMode;
