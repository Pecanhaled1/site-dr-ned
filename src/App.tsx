import React from 'react';
import { Icons } from './components/Icons';
import { SectionCard } from './components/SectionCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 via-[#050505] to-black text-slate-200 flex flex-col font-sans selection:bg-gold-500 selection:text-black">
      
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Gold glow top right - Sun/Window Light */}
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl"></div>
        {/* Blue glow mid left - Office Tones */}
        <div className="absolute top-[30%] -left-[10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl"></div>
        {/* Amber/Warm glow bottom right - Warmth from the photo */}
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Header Section */}
        <header className="pt-12 pb-8 px-4">
          <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            
            {/* Image Container - Vertical Portrait */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-2 bg-gradient-to-tr from-gold-600/10 to-transparent rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative w-48 md:w-56 aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl ring-1 ring-white/5">
                <img 
                  src="https://i.imgur.com/RcXOiTK.jpeg" 
                  onError={(e) => {
                    e.currentTarget.src = "https://picsum.photos/400/500?grayscale";
                  }}
                  alt="Dr. Ned Haas - Ortopedista" 
                  className="w-full h-full object-cover opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-700 contrast-110 saturate-110"
                />
                {/* Overlay gradient to blend bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Text Identity */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-gold-200 via-gold-400 to-gold-600 drop-shadow-sm">
                  Dr. Ned Haas
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-gold-500 to-transparent rounded-full mb-4"></div>
              <h2 className="text-xl md:text-2xl font-light text-slate-300 tracking-[0.3em] uppercase">
                Ortopedista
              </h2>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto max-w-4xl px-4 py-8 flex-grow space-y-8">
          
          {/* Bio Section */}
          <SectionCard className="backdrop-blur-xl bg-white/[0.02]">
            <p className="text-lg md:text-xl text-center md:text-left leading-relaxed text-slate-300">
              Com mais de <strong className="text-gold-400 font-semibold">20 anos de experiência clínica e cirúrgica</strong>, 
              o Dr. Ned Haas é um ortopedista dedicado ao diagnóstico e tratamento de doenças e lesões do sistema musculoesquelético.
            </p>
            <div className="my-6 border-t border-white/5"></div>
            <p className="text-lg md:text-xl text-center md:text-left leading-relaxed text-slate-300">
              Sua prática é focada em proporcionar o melhor cuidado aos pacientes, utilizando técnicas avançadas 
              e um atendimento humanizado para promover a recuperação e a melhoria da qualidade de vida.
            </p>
          </SectionCard>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Schedule */}
            <SectionCard title="Horário de Atendimento" icon={<Icons.Clock size={20} />}>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gold-500/20 rounded-md text-gold-400">
                        <Icons.Calendar size={18} />
                    </div>
                    <span className="font-medium text-slate-200">Terças-feiras</span>
                  </div>
                  <span className="text-gold-300 font-mono">14:00 - 19:00</span>
                </div>
                <p className="text-sm text-slate-500 text-center italic">
                  * Para agendamentos em outros horários, consulte disponibilidade.
                </p>
              </div>
            </SectionCard>

            {/* Contact Actions */}
            <SectionCard title="Agendamento" icon={<Icons.Phone size={20} />}>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://wa.me/5521987573537"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-green-900/20 hover:bg-green-800/30 text-green-400 border border-green-500/20 px-4 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-900/20"
                >
                  <Icons.WhatsApp className="w-6 h-6 fill-current" />
                  <span className="font-semibold tracking-wide group-hover:text-green-300 transition-colors">WhatsApp</span>
                </a>
                
                <a 
                  href="tel:+552132980472"
                  className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-gold-300 border border-white/10 hover:border-gold-500/30 px-4 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <Icons.Phone size={20} />
                  <span className="font-medium font-mono">(21) 3298-0472</span>
                </a>
              </div>
            </SectionCard>
          </div>

          {/* Location */}
          <SectionCard>
            <a 
              href="https://www.google.com/maps/place/Shopping+Tijuca/@-22.9219628,-43.2377984,17z/data=!3m1!4b1!4m6!3m5!1s0x997e6bae2c0001:0x203e1a0e878d3b5!8m2!3d-22.9219678!4d-43.2352235!16s%2Fg%2F12hsv49w2?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left group cursor-pointer hover:bg-white/5 p-2 rounded-xl -m-2 transition-colors duration-300"
              aria-label="Ver localização no Google Maps"
            >
              <div className="p-4 bg-gradient-to-br from-gold-500/20 to-gold-600/5 rounded-2xl text-gold-400 shrink-0 border border-gold-500/10 shadow-lg group-hover:scale-110 group-hover:bg-gold-500/30 group-hover:shadow-gold-500/20 transition-all duration-300">
                <Icons.MapPin size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gold-200 group-hover:underline decoration-gold-500/50 underline-offset-4 decoration-2 transition-all">Consultório Principal</h3>
                <p className="text-slate-400 text-lg leading-snug">
                  Av. Maracanã, 987 - Shopping Tijuca<br/>
                  Torre 3, Sala 1208
                </p>
                <p className="text-slate-500 font-mono text-sm">CEP 20511-000</p>
              </div>
            </a>
          </SectionCard>

        </main>

        {/* Footer */}
        <footer className="mt-auto border-t border-white/5 bg-black/60 backdrop-blur-md py-10">
          <div className="container mx-auto max-w-4xl px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="text-center md:text-left">
              <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-600">Dr. Ned Haas</p>
              <p className="text-sm text-slate-600 mt-2">© {new Date().getFullYear()} Medicina Ortopédica.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-8">
               <a 
                href="https://www.facebook.com/share/1Cue3HgmyP/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noreferrer"
                className="group relative p-2 text-slate-500 hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <div className="absolute inset-0 bg-blue-500/20 scale-0 group-hover:scale-100 rounded-full blur transition-transform duration-300"></div>
                <Icons.Facebook size={28} className="relative z-10" />
              </a>
              <a 
                href="https://instagram.com/nedhaas_dr" 
                target="_blank" 
                rel="noreferrer"
                className="group relative p-2 text-slate-500 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 bg-pink-500/20 scale-0 group-hover:scale-100 rounded-full blur transition-transform duration-300"></div>
                <Icons.Instagram size={28} className="relative z-10" />
              </a>
            </div>

          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
