/**
 * HACKTOBERFEST 2026 • LOGICA INTERATIVA
 * Inclui:
 * 1. Contador Regressivo ao Vivo para Outubro de 2026
 * 2. Renderização e Filtros da Agenda de Outubro (/schedule/)
 * 3. Simulador da Caderneta de 24 Adesivos (Sticker Book) com marcos de swag
 * 4. FAQ Accordion
 * 5. Menu Mobile Drawer
 */

// ==========================================
// 1. DADOS DA AGENDA DE OUTUBRO 2026
// ==========================================
const SCHEDULE_DATA = [
  {
    id: 1,
    date: '01 OUT',
    duration: '15:00 UTC • 12:00 BRT',
    title: 'Hacktoberfest 2026 Launch Livestream',
    category: 'ceremony',
    categoryLabel: 'Cerimônia',
    tagClass: 'tag-ceremony',
    description: 'Abertura oficial com os líderes da MLH, DEV e DigitalOcean apresentando o novo tema "AI Belongs to Everyone", as novas regras de stickers e os kits de fests.'
  },
  {
    id: 2,
    date: '02 - 08 OUT',
    duration: 'Semana 1 • DEV.to',
    title: 'DEV Challenge #1: Primeiros Passos com IA Aberta',
    category: 'dev',
    categoryLabel: 'DEV Challenge',
    tagClass: 'tag-dev',
    description: 'Submeta um artigo ou tutorial explicando como rodar seu primeiro modelo de pesos abertos ou integrar uma API de IA em um projeto open source.'
  },
  {
    id: 3,
    date: '05 - 11 OUT',
    duration: 'Semana Inteira • Virtual',
    title: 'Global Hack Week (GHW): Open Source AI Edition',
    category: 'ghw',
    categoryLabel: 'Global Hack Week',
    tagClass: 'tag-ghw',
    description: 'Uma maratona online global da MLH com workshops diários, transmissões na Twitch, sessões de tutoria e desafios que valem adesivos para a caderneta.'
  },
  {
    id: 4,
    date: '09 - 15 OUT',
    duration: 'Semana 2 • DEV.to',
    title: 'DEV Challenge #2: Fluxos e Agentes Autônomos',
    category: 'dev',
    categoryLabel: 'DEV Challenge',
    tagClass: 'tag-dev',
    description: 'Crie ou colabore com ferramentas que orquestram agentes autônomos, integrações de MCP ou pipelines com modelos open source.'
  },
  {
    id: 5,
    date: '14 OUT',
    duration: '18:00 UTC • 15:00 BRT',
    title: 'Workshop Técnico: Modelos Locais com Ollama & Gemma',
    category: 'workshops',
    categoryLabel: 'Workshop',
    tagClass: 'tag-workshops',
    description: 'Sessão prática ensinando como executar inferência local, quantização e criar chatbots sem enviar dados para servidores externos de big techs.'
  },
  {
    id: 6,
    date: '16 - 22 OUT',
    duration: 'Semana 3 • DEV.to',
    title: 'DEV Challenge #3: Datasets Abertos e Fine-Tuning',
    category: 'dev',
    categoryLabel: 'DEV Challenge',
    tagClass: 'tag-dev',
    description: 'Desenvolva soluções focadas em curadoria de dados abertos, fine-tuning comunitário e benchmarks transparentes.'
  },
  {
    id: 7,
    date: '19 OUT',
    duration: '19:00 UTC • 16:00 BRT',
    title: 'Mesa Redonda: Ética, Segurança e Licenças na IA Aberta',
    category: 'workshops',
    categoryLabel: 'Workshop',
    tagClass: 'tag-workshops',
    description: 'Painel com mantenedores discutindo a definição de Open Source AI pela OSI, licenças permissivas e governança descentralizada.'
  },
  {
    id: 8,
    date: '23 - 29 OUT',
    duration: 'Semana 4 • DEV.to',
    title: 'DEV Challenge #4: O Grande Projeto Final',
    category: 'dev',
    categoryLabel: 'DEV Challenge',
    tagClass: 'tag-dev',
    description: 'Apresente sua aplicação completa construída durante o Hacktoberfest. Concorra a prêmios especiais da DigitalOcean e DEV.'
  },
  {
    id: 9,
    date: '24 OUT',
    duration: 'Dia Inteiro • Global',
    title: 'Super Sábado de Fests Presenciais',
    category: 'workshops',
    categoryLabel: 'Fests Globais',
    tagClass: 'tag-workshops',
    description: 'Centenas de Hack Days e Meetups acontecendo simultaneamente ao redor do mundo em universidades, sedes de startups e espaços comunitários.'
  },
  {
    id: 10,
    date: '31 OUT',
    duration: '20:00 UTC • 17:00 BRT',
    title: 'Cerimônia de Encerramento & Sorteio Completionist',
    category: 'ceremony',
    categoryLabel: 'Cerimônia',
    tagClass: 'tag-ceremony',
    description: 'Transmissão final com a retrospectiva de todas as criações, revelação dos vencedores do DEV Challenge e sorteio das placas Arduino Uno Q e camisetas!'
  }
];

// ==========================================
// 2. DADOS DA CADERNETA DE 24 ADESIVOS (STICKER BOOK)
// ==========================================
const STICKER_CATEGORIES = [
  {
    categoryName: 'Conta & Boas-Vindas',
    stickers: [
      {
        id: 'st-mymlh',
        icon: '🪪',
        name: 'Perfil MyMLH & Endereço',
        desc: 'Cadastre sua conta no My Hacktoberfest e adicione o endereço onde deseja receber brindes (Garante 2 adesivos).'
      },
      {
        id: 'st-devto',
        icon: '🔗',
        name: 'Vincular Conta DEV.to',
        desc: 'Conecte seu usuário DEV ao My Hacktoberfest para habilitar submissões nos desafios oficiais.'
      }
    ]
  },
  {
    categoryName: 'Assistir & Aprender (Lives & Workshops)',
    stickers: [
      {
        id: 'st-launch-party',
        icon: '🚀',
        name: 'Launch Party Stream',
        desc: 'Assista à transmissão inaugural de abertura do Hacktoberfest 2026.'
      },
      {
        id: 'st-ghw-keynote',
        icon: '🎙️',
        name: 'Abertura da Global Hack Week',
        desc: 'Acompanhe a keynote inicial da semana de maratona de IA livre da MLH.'
      },
      {
        id: 'st-local-llm',
        icon: '💻',
        name: 'Workshop de Modelos Locais',
        desc: 'Participe da sessão técnica sobre inferência e agentes com pesos abertos.'
      },
      {
        id: 'st-closing-stream',
        icon: '🎉',
        name: 'Closing Livestream',
        desc: 'Marque presença na cerimônia oficial de encerramento em 31 de outubro.'
      }
    ]
  },
  {
    categoryName: 'Comunidade & Fests',
    stickers: [
      {
        id: 'st-discord',
        icon: '💬',
        name: 'Entrar no Discord Oficial',
        desc: 'Junte-se ao canal oficial do Hacktoberfest no servidor da MLH no Discord.'
      },
      {
        id: 'st-attend-fest',
        icon: '📍',
        name: 'Participar de um Fest',
        desc: 'Inscreva-se e faça check-in presencial em um Hack Day ou Meetup local.'
      },
      {
        id: 'st-host-fest',
        icon: '🎪',
        name: 'Sediar um Fest Comunitário',
        desc: 'Organize um Hack Day ou Meetup em sua cidade com suporte e kit da MLH.'
      },
      {
        id: 'st-ghw-checkin',
        icon: '📅',
        name: 'Check-in Diário na GHW',
        desc: 'Complete tarefas diárias na plataforma da Global Hack Week.'
      }
    ]
  },
  {
    categoryName: 'DEV.to Challenges (Desafios Semanais)',
    stickers: [
      {
        id: 'st-dev-1',
        icon: '📝',
        name: 'DEV Challenge #1 Concluído',
        desc: 'Publique seu artigo ou tutorial sobre início com IA aberta no DEV.'
      },
      {
        id: 'st-dev-2',
        icon: '🤖',
        name: 'DEV Challenge #2 Concluído',
        desc: 'Submeta seu fluxo de agentes ou automações inteligentes no DEV.'
      },
      {
        id: 'st-dev-3',
        icon: '📊',
        name: 'DEV Challenge #3 Concluído',
        desc: 'Compartilhe sua solução de fine-tuning ou datasets abertos.'
      },
      {
        id: 'st-dev-4',
        icon: '🏆',
        name: 'DEV Challenge #4 Projeto Final',
        desc: 'Entregue o projeto completo concorrendo a prêmios em dinheiro e badges.'
      }
    ]
  },
  {
    categoryName: 'Construindo & Experimentando',
    stickers: [
      {
        id: 'st-run-weights',
        icon: '🧠',
        name: 'Executar Modelo Open-Weight',
        desc: 'Rode um modelo de pesos abertos (Llama, Gemma, etc.) na sua máquina ou nuvem livre.'
      },
      {
        id: 'st-create-agent',
        icon: '⚙️',
        name: 'Criar um Agente Inteligente',
        desc: 'Desenvolva um agente capaz de executar chamadas de ferramentas ou automações.'
      },
      {
        id: 'st-open-dataset',
        icon: '📦',
        name: 'Contribuir com Dataset Aberto',
        desc: 'Publique ou melhore dados abertos documentados para treinamento comunitário.'
      },
      {
        id: 'st-ship-demo',
        icon: '🌐',
        name: 'Publicar Demo Interativa',
        desc: 'Disponibilize uma demonstração navegável para que outros testem sua ferramenta.'
      }
    ]
  },
  {
    categoryName: 'Feedback & Propagação',
    stickers: [
      {
        id: 'st-survey',
        icon: '📋',
        name: 'Pesquisa Oficial da Comunidade',
        desc: 'Preencha a pesquisa de feedback da organização sobre sua experiência.'
      },
      {
        id: 'st-social-share',
        icon: '📣',
        name: 'Compartilhar com #Hacktoberfest',
        desc: 'Divulgue suas criações no LinkedIn, X ou Bluesky usando a hashtag oficial.'
      },
      {
        id: 'st-help-beginner',
        icon: '🤝',
        name: 'Apoiar um Iniciante',
        desc: 'Ajude outro participante tirando dúvidas no Discord ou nos comentários do DEV.'
      }
    ]
  },
  {
    categoryName: 'Easter Eggs & Extras',
    stickers: [
      {
        id: 'st-easter-terminal',
        icon: '⌨️',
        name: 'Comando Secreto de Terminal',
        desc: 'Encontre e digite o comando misterioso escondido no console do My Hacktoberfest.'
      },
      {
        id: 'st-midnight-coder',
        icon: '🌙',
        name: 'Desenvolvedor da Madrugada',
        desc: 'Faça um check-in de desafio durante a madrugada na Global Hack Week.'
      },
      {
        id: 'st-veteran',
        icon: '🎖️',
        name: 'Veterano do Código Aberto',
        desc: 'Vincule uma conta que participou de edições históricas anteriores.'
      }
    ]
  }
];

// Estado global do simulador
const collectedStickers = new Set(['st-mymlh']); // Inicia com o de cadastro marcado por padrão

// ==========================================
// 3. INICIALIZAÇÃO DA PÁGINA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  renderSchedule('all');
  initScheduleFilters();
  renderStickers();
  updateStickerProgress();
  initFaqAccordion();
  initMobileMenu();
  initSmoothScroll();
});

// ==========================================
// 4. CONTADOR REGRESSIVO DINÂMICO
// ==========================================
function initCountdown() {
  const cdDays = document.getElementById('cd-days');
  const cdHours = document.getElementById('cd-hours');
  const cdMin = document.getElementById('cd-minutes');
  const cdSec = document.getElementById('cd-seconds');

  if (!cdDays || !cdHours || !cdMin || !cdSec) return;

  // Final de outubro de 2026: 31 de Outubro às 23:59:59 UTC
  const targetDate = new Date('2026-10-31T23:59:59Z').getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      cdDays.textContent = '00';
      cdHours.textContent = '00';
      cdMin.textContent = '00';
      cdSec.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    cdDays.textContent = String(days).padStart(2, '0');
    cdHours.textContent = String(hours).padStart(2, '0');
    cdMin.textContent = String(minutes).padStart(2, '0');
    cdSec.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// ==========================================
// 5. AGENDA E FILTROS (/schedule/)
// ==========================================
function renderSchedule(filterCategory = 'all') {
  const container = document.getElementById('schedule-container');
  if (!container) return;

  const filtered = filterCategory === 'all' 
    ? SCHEDULE_DATA 
    : SCHEDULE_DATA.filter(item => item.category === filterCategory);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="background: white; padding: 24px; border: 2px solid #10201D; border-radius: 8px;">
        <p style="font-weight: 700; color: #10201D;">Nenhum evento encontrado para esta categoria.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="timeline-item" data-category="${item.category}">
      <div class="timeline-date-box">
        <span class="timeline-date">${item.date}</span>
        <span class="timeline-duration">${item.duration}</span>
      </div>
      <div class="timeline-content-box">
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.description}</p>
      </div>
      <div>
        <span class="timeline-category-tag ${item.tagClass}">${item.categoryLabel}</span>
      </div>
    </article>
  `).join('');
}

function initScheduleFilters() {
  const filterBtns = document.querySelectorAll('.schedule-filters-bar .filter-tab');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderSchedule(cat);
    });
  });
}

// ==========================================
// 6. CADERNETA DE ADESIVOS (24 STICKERS)
// ==========================================
function renderStickers() {
  const container = document.getElementById('stickers-container');
  if (!container) return;

  let totalCount = 0;
  STICKER_CATEGORIES.forEach(c => totalCount += c.stickers.length);

  container.innerHTML = STICKER_CATEGORIES.map(category => `
    <div class="stickers-category-block">
      <div class="category-block-header">
        <h3 class="category-block-title">${category.categoryName}</h3>
        <span class="category-block-count">${category.stickers.length} adesivos</span>
      </div>
      <div class="stickers-grid">
        ${category.stickers.map(st => {
          const isCollected = collectedStickers.has(st.id);
          return `
            <div class="sticker-item-card ${isCollected ? 'collected' : ''}" data-id="${st.id}" role="button" tabindex="0" aria-pressed="${isCollected}">
              <div class="sticker-card-top">
                <div class="sticker-icon-badge">${st.icon}</div>
                <span class="sticker-check">${isCollected ? '✓ COLETADO' : '+ CLIQUE P/ COLETAR'}</span>
              </div>
              <h4 class="sticker-name">${st.name}</h4>
              <p class="sticker-desc">${st.desc}</p>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');

  // Atribui listeners aos cards
  const cards = container.querySelectorAll('.sticker-item-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      if (collectedStickers.has(id)) {
        collectedStickers.delete(id);
      } else {
        collectedStickers.add(id);
      }
      renderStickers();
      updateStickerProgress();
    });

    // Suporte para navegação via teclado
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Botão de reset
  const resetBtn = document.getElementById('btn-reset-stickers');
  if (resetBtn) {
    resetBtn.onclick = () => {
      collectedStickers.clear();
      renderStickers();
      updateStickerProgress();
    };
  }
}

function updateStickerProgress() {
  const countSpan = document.getElementById('tracker-count');
  const progressFill = document.getElementById('progress-fill');
  const rewardBanner = document.getElementById('reward-banner');

  const count = collectedStickers.size;
  const total = 24;
  const percent = Math.min(100, Math.round((count / total) * 100));

  if (countSpan) {
    countSpan.innerHTML = `Adesivos coletados: <strong>${count}</strong> de ${total}`;
  }

  if (progressFill) {
    progressFill.style.width = `${percent}%`;
  }

  if (rewardBanner) {
    if (count === 0) {
      rewardBanner.innerHTML = `
        <span class="reward-icon">💡</span>
        <span class="reward-text">Clique nos adesivos abaixo para simular as atividades que você pretende realizar neste mês!</span>
      `;
      rewardBanner.style.backgroundColor = 'var(--hf-paper-alt)';
    } else if (count < 3) {
      const needed = 3 - count;
      rewardBanner.innerHTML = `
        <span class="reward-icon">🎯</span>
        <span class="reward-text">Faltam apenas <strong>${needed} adesivo(s)</strong> para você desbloquear o <strong>Pacote Físico de Adesivos</strong> oficial entregue na sua casa!</span>
      `;
      rewardBanner.style.backgroundColor = 'var(--hf-sky-light)';
    } else if (count < 10) {
      const needed = 10 - count;
      rewardBanner.innerHTML = `
        <span class="reward-icon">📬</span>
        <span class="reward-text"><strong>PARABÉNS! PACOTE FÍSICO DESBLOQUEADO!</strong> A MLH enviará seu kit de adesivos oficiais pelo correio. Colete mais <strong>${needed} adesivo(s)</strong> para ganhar o Adesivo Holográfico Bônus!</span>
      `;
      rewardBanner.style.backgroundColor = 'var(--hf-ochre-light)';
    } else if (count < 15) {
      const needed = 15 - count;
      rewardBanner.innerHTML = `
        <span class="reward-icon">✨</span>
        <span class="reward-text"><strong>ADESIVO HOLOGRÁFICO GARANTIDO!</strong> Seu pacote virá com acabamento holográfico especial. Faltam <strong>${needed} adesivo(s)</strong> para se tornar <em>Completionist</em> e concorrer a Camisetas e Placas Arduino!</span>
      `;
      rewardBanner.style.backgroundColor = 'var(--hf-pink-light)';
    } else {
      rewardBanner.innerHTML = `
        <span class="reward-icon">🏆</span>
        <span class="reward-text"><strong>NÍVEL COMPLETIONIST ALCANÇADO (${count}/24)!</strong> Você é uma lenda do Open Source AI! Além do pacote físico completo com holográfico, você participa do sorteio exclusivo das cobiçadas Camisetas Hacktoberfest 2026 e placas Arduino Uno Q!</span>
      `;
      rewardBanner.style.backgroundColor = '#D4EDDA';
    }
  }
}

// ==========================================
// 7. FAQ ACCORDION
// ==========================================
function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach(card => {
    const toggle = card.querySelector('.faq-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      const isOpen = card.classList.contains('active');
      
      // Fecha os outros para efeito sanfona elegante
      faqCards.forEach(c => {
        c.classList.remove('active');
        const t = c.querySelector('.faq-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        card.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ==========================================
// 8. MENU MOBILE DRAWER
// ==========================================
function initMobileMenu() {
  const toggleBtn = document.getElementById('btn-mobile-menu');
  const drawer = document.getElementById('mobile-drawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    drawer.classList.toggle('active');
  });

  // Fecha o drawer ao clicar em qualquer link
  const links = drawer.querySelectorAll('.mobile-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ==========================================
// 9. NAVEGAÇÃO SUAVE
// ==========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = document.getElementById('navbar')?.offsetHeight || 74;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });
}
