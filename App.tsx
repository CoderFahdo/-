
import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronRight, ChevronLeft, Leaf, ShoppingBag, Globe, Clock, Wallet, Headphones, Zap,
  MapPin, Search, CheckCircle2, Package, ArrowRight, Printer, Smartphone, TrendingUp,
  Settings, ShieldCheck, Star, Award, Lock, Server, Share2, Copy, Send
} from 'lucide-react';
import { ThreeDCard } from './components/ThreeDCard';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copied, setCopied] = useState(false);
  const totalSlides = 14;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') nextSlide();
      if (e.key === 'ArrowRight') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const text = `مرحباً، يسعدنا في ركائز (Rakkaiz) تقديم العرض الفني والمالي المتكامل لمشروع "ورق التوت" الذكي لعام 2025. يمكنك استعراض العرض كاملاً عبر الرابط التالي: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6 sm:space-y-10 animate-page px-2">
            <div className="relative group floating">
              <div className="absolute -inset-6 sm:-inset-10 bg-[#d4af37]/20 rounded-full blur-3xl opacity-50"></div>
              <div className="bg-white p-8 sm:p-16 rounded-[2rem] sm:rounded-[3rem] shadow-xl relative border-2 border-[#d4af37]/30">
                <div className="flex flex-col items-center gap-1">
                   <h3 className="text-[#064e3b] font-black text-2xl sm:text-4xl tracking-tighter">RAKKAIZ</h3>
                   <p className="text-[#d4af37] text-[8px] sm:text-[10px] font-bold tracking-[0.4em] sm:tracking-[0.6em] -mt-1 uppercase">Solutions</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block px-5 py-1.5 sm:px-8 sm:py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#d4af37] font-bold text-xs sm:text-sm tracking-wider uppercase">
                 عرض التحول الرقمي الفاخر
              </div>
              <h1 className="text-4xl sm:text-7xl font-extrabold text-[#064e3b] tracking-tight leading-tight px-2">
                منصة <span className="gold-gradient-text italic">ورق التوت</span> الذكية
              </h1>
              <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto rounded-full"></div>
              <p className="text-lg sm:text-2xl font-medium text-slate-500 max-w-2xl mx-auto leading-relaxed px-4">
                استراتيجية متكاملة مقدمة من <span className="text-[#064e3b] font-bold">Rakkaiz Solutions</span> للحلول التسويقية.
              </p>
            </div>
            <div className="pt-4 sm:pt-8">
              <button onClick={nextSlide} className="emerald-gradient-bg text-white px-10 py-4 sm:px-14 sm:py-5 rounded-full text-lg sm:text-xl font-bold shadow-lg transition-all flex items-center gap-4 sm:gap-8 group">
                ابدأ العرض <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12 animate-page">
            <div className="flex items-center gap-4 sm:gap-6">
               <div className="p-3 sm:p-4 emerald-gradient-bg text-[#d4af37] rounded-xl shadow-lg"><Award className="w-6 h-6 sm:w-8 sm:h-8"/></div>
               <h2 className="text-3xl sm:text-5xl font-extrabold text-[#064e3b]">لماذا ركائز؟</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
              <ThreeDCard delay={100}>
                <div className="space-y-4 sm:space-y-6 text-right">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#064e3b]">قيمة تتجاوز البرمجة</h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed italic font-medium">
                    "نحن في ركائز (Rakkaiz) لا نبني مجرد كود، بل نصمم أصولاً رقمية تحمي براند ورق التوت وتضعه في صدارة المنافسة."
                  </p>
                  <div className="flex gap-1 justify-end">
                     {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />)}
                  </div>
                </div>
              </ThreeDCard>
              <div className="space-y-3 sm:space-y-4">
                {[
                  {t: "الملكية الكاملة", d: "المتجر ملك لورق التوت بالكامل."},
                  {t: "بيانات العملاء", d: "قاعدة بيانات مشفرة بالكامل."},
                  {t: "السرعة والأداء", d: "تجربة تصفح فورية وسلسة."},
                  {t: "استدامة النمو", d: "نظام قابل للتوسع للمستقبل."}
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                     <div className="w-10 h-10 rounded-xl bg-[#064e3b]/5 text-[#064e3b] flex items-center justify-center font-bold flex-shrink-0">0{idx+1}</div>
                     <div>
                        <h4 className="font-bold text-[#064e3b] text-base">{item.t}</h4>
                        <p className="text-xs text-slate-500">{item.d}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="max-w-6xl mx-auto space-y-8 animate-page">
             <div className="flex items-center gap-4">
               <div className="p-3 emerald-gradient-bg text-[#d4af37] rounded-xl shadow-lg"><ShieldCheck className="w-6 h-6"/></div>
               <h2 className="text-3xl sm:text-5xl font-extrabold text-[#064e3b]">الأمان الرقمي</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
               {[
                 {icon: <Lock />, t: "تشفير SSL", d: "حماية بيانات الدفع والعملاء."},
                 {icon: <ShieldCheck />, t: "Firewall", d: "منع الهجمات الإلكترونية."},
                 {icon: <Server />, t: "نسخ احتياطي", d: "نسخ يومي لبيانات المتجر."}
               ].map((item, i) => (
                 <ThreeDCard key={i} delay={i * 100}>
                    <div className="text-[#d4af37] mb-4">{item.icon}</div>
                    <h4 className="text-xl font-bold text-[#064e3b] mb-2">{item.t}</h4>
                    <p className="text-sm text-slate-600 font-medium">{item.d}</p>
                 </ThreeDCard>
               ))}
            </div>
          </div>
        );

      case 10:
        return (
          <div className="max-w-5xl mx-auto space-y-8 animate-page text-center">
            <div className="emerald-gradient-bg p-10 sm:p-20 rounded-[2.5rem] sm:rounded-[4rem] text-white shadow-xl relative overflow-hidden">
               <p className="text-[#d4af37] font-black text-lg sm:text-2xl mb-4 sm:mb-6 tracking-widest">إجمالي الاستثمار</p>
               <div className="flex flex-col items-center gap-1 sm:gap-2 mb-6 sm:mb-8">
                  <span className="text-7xl sm:text-[10rem] leading-none font-black gold-gradient-text">10</span>
                  <span className="text-2xl sm:text-5xl font-black opacity-80">ألف ريال سعودي</span>
               </div>
               <p className="text-sm sm:text-xl opacity-70 font-bold italic border-t border-white/20 pt-4 sm:pt-6">استثمار لمرة واحدة لبناء منصة ذكية دائمة.</p>
            </div>
          </div>
        );

      case 13:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8 sm:space-y-12 animate-page px-4">
            <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] shadow-xl border-4 border-[#d4af37]/30">
               <h3 className="text-[#064e3b] font-black text-3xl sm:text-5xl uppercase">RAKKAIZ</h3>
               <p className="text-[#d4af37] text-[8px] sm:text-[10px] font-bold tracking-[0.5em] uppercase">Solutions</p>
            </div>
            <div className="space-y-6 sm:space-y-8 max-w-4xl">
              <h2 className="text-4xl sm:text-7xl font-black text-[#064e3b] leading-tight">شريككم لنمو <br/><span className="gold-gradient-text italic">ورق التوت</span></h2>
              <p className="text-xl sm:text-3xl text-slate-500 font-bold px-4 sm:px-12 italic">
                "فخورون باختياركم لنا، وجاهزون للبدء فوراً."
              </p>
            </div>
            <button onClick={() => setCurrentSlide(0)} className="text-[#064e3b] font-black flex items-center gap-3 border-2 border-[#064e3b]/20 px-8 py-3 rounded-full no-print active:bg-slate-50 transition-colors">
              العودة للغلاف <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        );

      default:
        return (
          <div className="max-w-4xl mx-auto text-center animate-page py-10 sm:py-20 px-4">
             <h2 className="text-2xl sm:text-4xl font-black text-[#064e3b] mb-4 sm:mb-8">مشروع ورق التوت الذكي</h2>
             <p className="text-base sm:text-xl text-slate-500">جاري عرض تفاصيل المشروع المتكاملة من ركائز.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] relative flex flex-col items-center justify-center p-2 sm:p-6 md:p-10">
      
      {/* Floating Share Toolbar (Professional & Useful) */}
      <div className="fixed top-4 left-4 sm:top-8 sm:left-8 z-50 flex gap-2 no-print">
         <button 
           onClick={handleWhatsAppShare}
           className="p-3 bg-emerald-500 text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all"
           title="مشاركة عبر واتساب"
         >
           <Send className="w-5 h-5" />
         </button>
         <button 
           onClick={handleCopyLink}
           className={`p-3 rounded-full shadow-lg transition-all flex items-center gap-2 ${copied ? 'bg-[#d4af37] text-white' : 'bg-white text-[#064e3b] hover:bg-slate-50'}`}
           title="نسخ الرابط"
         >
           <Copy className="w-5 h-5" />
           {copied && <span className="text-xs font-bold hidden sm:inline">تم النسخ!</span>}
         </button>
      </div>

      <main className="w-full max-w-[1400px] flex flex-col min-h-[85vh] sm:h-[90vh] relative z-10">
        <div className="flex-1 bg-white shadow-xl rounded-[2.5rem] sm:rounded-[5rem] p-4 sm:p-10 md:p-20 relative overflow-hidden border border-[#d4af37]/10">
          <div className="h-full overflow-y-auto custom-scrollbar px-1 sm:px-4">
             {renderSlide()}
          </div>
        </div>

        <div className="no-print mt-6 sm:mt-12 flex items-center justify-between w-full max-w-5xl mx-auto bg-[#064e3b] px-4 sm:px-10 py-4 sm:py-6 rounded-2xl sm:rounded-[3rem] shadow-xl relative">
          <button onClick={prevSlide} disabled={currentSlide === 0} className={`p-2 sm:p-4 rounded-xl transition-all ${currentSlide === 0 ? 'opacity-20' : 'text-white active:bg-white/10'}`}>
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <div className="sm:hidden text-white font-bold text-sm bg-white/10 px-4 py-1 rounded-full">
            {currentSlide + 1} / {totalSlides}
          </div>

          <div className="hidden sm:flex gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className={`h-2 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-8 bg-[#d4af37]' : 'w-2 bg-white/20'}`} />
            ))}
          </div>

          <button onClick={nextSlide} disabled={currentSlide === totalSlides - 1} className={`p-2 sm:p-4 rounded-xl transition-all ${currentSlide === totalSlides - 1 ? 'opacity-20' : 'text-white active:bg-white/10'}`}>
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        </div>
      </main>

      <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 items-center no-print w-full max-w-xs sm:max-w-none">
         <button 
           onClick={() => window.print()} 
           className="w-full sm:w-auto flex items-center justify-center gap-4 emerald-gradient-bg text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-lg font-black transition-all active:scale-95 border-2 border-[#d4af37]/30"
         >
           <Printer className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37]" />
           تصدير PDF فاخر
         </button>
      </div>
    </div>
  );
};

export default App;
