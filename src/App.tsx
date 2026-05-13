import { motion } from 'framer-motion';
import PetalBackground from './components/PetalBackground';
import { Mail, MapPin, Send, Grid, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary-fixed selection:text-primary overflow-x-hidden relative">
      <PetalBackground />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-[20px] border-b border-surface-container">
        <div className="flex justify-between items-center w-full px-6 md:px-16 py-4 max-w-7xl mx-auto">
          <motion.a 
            href="#" 
            className="font-display text-2xl tracking-tight text-primary font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            AKSHITA
          </motion.a>
          <div className="hidden md:flex items-center gap-8">
            {['Work', 'Services', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-on-surface-variant font-medium text-sm hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <motion.button 
            className="bg-primary text-on-primary px-6 py-2 rounded-full font-semibold text-sm hover:opacity-90 active:scale-95 transition-all"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Hire Me
          </motion.button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary-fixed/20 rounded-full blur-[80px] floating-element" />
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-tertiary-fixed/20 rounded-full blur-[100px] floating-element" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-secondary-fixed/10 rounded-full blur-[60px] floating-element" style={{ animationDelay: '4s' }} />
        </div>
        
        <script src="https://ais-pre-j5n4tgvrdgzlt25naznz7e-761428424299.asia-east1.run.app/js/petal-bg.js" />
        {/* I'll use the component instead of external script */}
        {/* But actually the user said I can hotlink images. I'll stick to the component for the background effect */}
        
        <div className="relative z-10 text-center max-w-4xl">
          <motion.p 
            className="font-accent text-2xl text-secondary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my digital garden
          </motion.p>
          <motion.h1 
            className="font-display text-6xl md:text-8xl leading-none mb-6 font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Creative <span className="shimmer-text">Vision</span> <br />
            <span className="font-heading italic text-primary font-medium">with a soft touch</span>
          </motion.h1>
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#work" className="px-8 py-4 bg-primary text-on-primary rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              Explore My Portfolio
            </a>
            <a href="#contact" className="px-8 py-4 glass glass-border text-primary rounded-full font-bold hover:bg-surface-container-low transition-colors">
              Start a Conversation
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs tracking-widest uppercase font-bold">Scroll</span>
          <motion.div 
            className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
            animate={{ height: [12, 48, 12] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </header>

      {/* About */}
      <section className="py-24 relative px-6 md:px-16 bg-surface-container-low" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden glass-border p-4 glass floating-element">
              <img 
                src="https://raw.githubusercontent.com/Akshita060208/pfp/main/pfp.jpeg" 
                alt="Portrait" 
                className="w-full h-full object-cover rounded-[32px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl shadow-xl max-w-[280px] border border-white/50">
              <p className="font-accent text-primary text-2xl mb-2">An investment in knowledge pays the best interest</p>
              <span className="text-sm text-on-surface-variant font-bold">— Benjamin Franklin</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-8"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-5xl text-primary leading-tight font-medium">
              Innovate, Build and <span className="italic text-secondary">inspire.</span>
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Driven Computer Science Student with a strong foundation in Java, DSA and web Development. 
              Eager to pursue a career in Software Engineering, applying my problem solving and collaborative skills to innovative projects. 
              Committed to continuous learning and driving technological advancements.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-primary-container pt-8">
              {[
                { label: 'Projects', val: '12+' },
                { label: 'Languages', val: '15+' },
                { label: 'LeetCode', val: '200+' }
              ].map((stat) => (
                <div key={stat.label}>
                  <h4 className="font-heading text-3xl text-primary font-medium">{stat.val}</h4>
                  <p className="text-xs text-on-surface-variant uppercase font-bold tracking-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 md:px-16 bg-surface overflow-hidden" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <span className="text-xs text-primary font-bold tracking-[0.2em] uppercase">Services</span>
              <h2 className="font-heading text-5xl mt-2 font-medium">Top notch services with <span className="italic font-accent text-secondary text-3xl">visionary.</span></h2>
            </div>
            <p className="text-on-surface-variant">Tailored creative direction from concept to launch.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Website Development',
                desc: 'Modern, fast, responsive websites built with React & modern tech',
                items: ['Business websites', 'Landing Pages', 'E-commerce'],
                icon: <Sparkles className="w-8 h-8" />,
                delay: 0.1
              },
              {
                title: 'Full-Stack Apps',
                desc: 'End-to-end applications with complex business logic and robust backends.',
                items: ['UI/UX Design', 'Responsive Web', 'API Integration'],
                icon: <Grid className="w-8 h-8" />,
                delay: 0.2
              },
              {
                title: 'UI/UX Design',
                desc: 'Clean, intuitive, and conversion-focused interfaces that delight users.',
                items: ['Responsive Design', 'Clean Graphics', 'Color Theory'],
                icon: <Send className="w-8 h-8" />,
                delay: 0.3
              }
            ].map((service) => (
              <motion.div 
                key={service.title}
                className="group relative p-8 glass rounded-[32px] glass-border hover:bg-primary-fixed/30 transition-all duration-500 flex flex-col h-full"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-heading text-3xl mb-4 font-medium">{service.title}</h3>
                <p className="text-on-surface-variant mb-8 flex-grow">{service.desc}</p>
                <ul className="space-y-3 text-sm font-bold text-primary">
                  {service.items.map(item => (
                    <li key={item} className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 px-6 md:px-16 bg-surface-container-low" id="work">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl mb-4 font-bold">Selected Works</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {['All', 'Development', 'Design', 'Full-Stack'].map(cat => (
                <button key={cat} className={cn(
                  "px-6 py-2 rounded-full font-bold transition-all",
                  cat === 'All' ? "glass glass-border text-primary" : "text-on-surface-variant hover:text-primary"
                )}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
             <div className="md:col-span-8 group relative overflow-hidden rounded-[40px] glass-border aspect-[16/10]">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEplAQiY36KHD2yWa260UzPIOFd6dD3SWDoOHK1M58vN-lRWz4ZLaA04l_KD273vCTGHhCafGt4Ck0krA4dGPTTNXQjnR_NP_-e2R3WD_5Q6r0nELiXxFIib0BqOtS7oUOfjKglS9mAzf0z3GALpF6Arsvy9I1mC8dnKumb4FVU4CzAyRDO1O67br9tPsLxkFZJvhfvn67xMovuK_n2wL4QeA6eNelwp2UCibYVQd9VDmcA9-lfb_vuR8OJdCJjqtHYNteY4Li8o0" alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                 <span className="text-white text-xs uppercase tracking-widest mb-2 font-bold">Full stack development</span>
                 <div className="flex items-center justify-between">
                   <h3 className="text-white font-heading text-4xl">Sylvan Residences</h3>
                   <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
               </div>
             </div>
             <div className="md:col-span-4 group relative overflow-hidden rounded-[40px] glass-border aspect-[9/12]">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiOjcg9k8vzycJ8hzw1X1mI5z0zr3o5Yxd6t_fUVlp1AttGwh7yAAlaai9BiJ03PpPjMnWbj1lDQM2hl3BmPeRJrwoN6HCfXrLi10PCtqikQ7vt51nfwyPwEgsxgPyCi49dnyev7C-DuQ9YYvnnfurZ2w6Fq_thzp9HzP-4Z_JyPR03sz1b2OGs_KrqjdBfIsTWqjkW57kTNWrSD8_gzS7jqjiJD8KlOWh9Nj1LIlZahCwa3TqsezGPGabuEE7lubEM5m-m6PnQ_g" alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-white text-xs uppercase tracking-widest mb-2 font-bold">DSA Architecture</span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-heading text-3xl">Algorithm Visualizer</h3>
                    <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                  </div>
                </div>
             </div>
             <div className="md:col-span-4 group relative overflow-hidden rounded-[40px] glass-border aspect-square">
                <img src="https://raw.githubusercontent.com/Akshita060208/pfp/main/pfp.jpeg" alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-white text-xs uppercase tracking-widest mb-2 font-bold">Digital Identity</span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-heading text-3xl">Personal Brand</h3>
                    <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                  </div>
                </div>
             </div>
             <div className="md:col-span-8 group relative overflow-hidden rounded-[40px] glass-border aspect-[16/8]">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMCIcNCrFEO-QuaEKduDjQCTqHXBc1m-vE6PqRaPl9hnWz5kQ-48zMiegRc2kqS-mC3HN0IbVD8vJe7VQ2gnMOduEVmRJAH8RWGc6menIbIJ2WszagTt6ilAbG8RmINMfDttTGapFlnQAmc4jM3yjWzx_MEIzzfENGUphwg7kD7smZa2Xj5e509vYHk8gKNiOzFxR8BJZkdTT0utvH-XbNPK8zORWUSfYUMVqeQ5RMD3IK9fT5yzqqNuCH0yge26R4XXbPioOCAz4" alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                   <span className="text-white text-xs uppercase tracking-widest mb-2 font-bold">Web Experience</span>
                   <div className="flex items-center justify-between">
                     <h3 className="text-white font-heading text-4xl">Modern Dashboard</h3>
                     <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6 md:px-16 bg-surface overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
           <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
           >
             <span className="font-heading text-8xl text-primary opacity-30 leading-none">“</span>
             <div className="glass p-12 rounded-[40px] glass-border relative z-10 w-full mt-[-40px]">
               <p className="font-heading text-3xl italic mb-8">
                 "Engineering is the closest thing to magic that exists in the world."
               </p>
               <div className="flex flex-col items-center gap-2">
                 <span className="font-heading text-2xl text-primary font-medium">Elon Musk</span>
                 <span className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Visionary Explorer</span>
               </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 md:px-16 relative" id="contact">
        <div className="max-w-7xl mx-auto glass p-12 md:p-24 rounded-[60px] glass-border grid grid-cols-1 md:grid-cols-2 gap-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-fixed/10 -skew-x-12 translate-x-1/4" />
          <div className="relative z-10">
            <h2 className="font-display text-5xl mb-6 font-bold leading-tight">
              Let's connect to create something <span className="shimmer-text">beautiful.</span>
            </h2>
            <p className="text-lg text-on-surface-variant mb-12">
              Currently accepting select creative partnerships for late 2024. Reach out to discuss your vision.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase">Email</p>
                  <p className="text-lg">joshiakshita2008@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary uppercase">Location</p>
                  <p className="text-lg">Panchkula, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.form 
            className="relative z-10 flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              { label: 'Your Name', placeholder: 'John Doe', type: 'text' },
              { label: 'Email Address', placeholder: 'john@company.com', type: 'email' },
            ].map((field) => (
              <div key={field.label} className="group border-b border-primary-container transition-colors focus-within:border-primary py-2">
                <label className="block text-xs text-on-surface-variant font-bold uppercase mb-1">{field.label}</label>
                <input 
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent border-none p-0 focus:ring-0 text-lg text-on-surface placeholder:text-surface-dim"
                />
              </div>
            ))}
            <div className="group border-b border-primary-container transition-colors focus-within:border-primary py-2">
              <label className="block text-xs text-on-surface-variant font-bold uppercase mb-1">The Project</label>
              <textarea 
                placeholder="Tell me about your dream project..."
                rows={4}
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-lg text-on-surface placeholder:text-surface-dim resize-none"
              />
            </div>
            <button type="submit" className="mt-8 bg-primary text-on-primary py-4 rounded-full font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
              Send Inquiry <Send size={18} />
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-low py-12 px-6 md:px-16 border-t border-surface-container">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="font-accent text-secondary text-3xl">Akshita creates</a>
            <p className="text-sm text-on-surface-variant">© 2026 Akshita Creates. Curated with intention.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-on-surface-variant">
            {['Instagram', 'LinkedIn', 'Privacy Policy', 'Terms'].map(link => (
              <a key={link} href="#" className="hover:text-primary transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </footer >

      {/* Mobile Nav */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 glass glass-border rounded-full px-8 py-4 flex gap-10 z-50 shadow-2xl">
        <a href="#" className="text-primary"><Mail size={20} /></a>
        <a href="#work" className="text-on-surface-variant">W</a>
        <a href="#about" className="text-on-surface-variant">A</a>
        <a href="#contact" className="text-on-surface-variant">C</a>
      </div>
    </div>
  );
}
