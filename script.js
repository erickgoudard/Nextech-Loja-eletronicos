// 1. BANCO DE DADOS DE PRODUTOS GAMER (12 PRODUTOS)
const products = [
    // ================= COMPUTADORES E CONSOLES =================
    {
        id: 1,
        name: "PC Gamer Completo Ryzen 5",
        category: "Gamer",
        price: 3087.39,
        desc: "O PC Gamer entrega  um ótimo custo-benefício de entrada com vídeo integrado Radeon Vega 7, rodando jogos competitivos e leves em Full HD sem placa de vídeo dedicada.",
        fullDesc: "Montado e testado em bancada pela equipe NexTech para alto desempenho em Quad HD e Full HD competitivo. Conta com fluxo de ar otimizado, refrigeração líquida para manter os clocks estáveis e armazenamento NVMe de alta velocidade.",
        warranty: "Garantia de 12 meses com suporte técnico NexTech",
        img: "Computador.jpg"
    },
    {
        id: 2,
        name: "Nintendo Switch",
        category: "Gamer",
        price: 2290.00,
        desc: " Console de videogame híbrido da Nintendo, lançado em março de 2017, que funciona tanto como aparelho portátil quanto como console de mesa conectado à TV",
        fullDesc: "A linha inclui o Nintendo Switch 2 (nova geração, lançado em junho de 2025) e os modelos da primeira geração (OLED, Padrão V1/V2 e Lite.",
        warranty: "Garantia de 12 meses com suporte técnico NexTech",
        img: "NINTENDO.jpg"
    },
    {
        id: 3,
        name: " Console Xbox Series X",
        category: "Gamer",
        price:8299.99,
        desc: " SSD NVMe personalizado com a Xbox Velocity Architecture, reduzindo carregamentos e permitindo o recurso Quick Resume para alternar entre jogos rapidamente",
        fullDesc: "CPU de 8 núcleos Zen 2 (até 3,8 GHz), GPU de 12 teraflops RDNA 2 e 16 GB de RAM GDDR6",
        warranty: "Garantia de 12 meses com suporte técnico NexTech",
        img: "XBOX.jpg"
    },
    {
        id: 4,
        name: "Console PlayStation 5 ",
        category: "Gamer",
        price: 5000.00,
        desc: " O PlayStation 5  é um console de videogame desenvolvido pela Sony, focado em carregamentos rápidos, gráficos em alta resolução e imersão sensorial. Ele é compatível com jogos de PS4 e com o PlayStation VR2",
        fullDesc: "  Suporta resolução de até 4K, tecnologia Ray tracing (iluminação, sombras e reflexos realistas), cores HDR e taxas de até 120 fps em jogos compatíveis.",
        warranty: "Garantia de 12 meses com suporte técnico NexTech",
        img: "PS5.jpg"
    },

    // ================= ACESSÓRIOS =================
    {
        id: 5,
        name: "Fone Bluetooth Roxo",
        category: "acessorios",
        price: 30.47,
        desc: " Dispositivo de áudio sem fio na cor roxa que transmite som por conexão Bluetooth, variando entre modelos intra-auriculares (TWS) e headphones de arco",
        fullDesc: " headphone sem fio com cancelamento ativo de ruído híbrido de até 43 dB, Bluetooth 5.4 e bateria de até 60 horas de reprodução.",
        warranty: "Garantia de 12 meses contra defeitos de fabricação ápos a troca",
        img: "Fone.jpg"
    },
    {
        id: 6,
        name: "Mouse Gamer ",
        category: "perifericos",
        price: 900.00,
        desc: "Mouse gamer é um periférico projetado para oferecer maior precisão, rapidez de resposta e ergonomia em jogos, com sensores de alto desempenho.",
        fullDesc: "Mouses ultraleves (cerca de 48 g a 60 g) favorecem jogos de tiro (FPS) com movimentos ágeis, enquanto modelos mais pesados ou com múltiplos botões atendem bem a jogos de estratégia, MMO ou uso misto.",
        warranty: "Garantia de 12 meses contra defeitos de fabricação",
        img: "Mouse.jpg"
    },
    {
        id: 7,
        name: "Placa Mae",
        category: "perifericos",
        price: 1800.00,
        desc: "Placa Mae é a placa de circuito impresso principal de um computador. Ela interliga e permite a comunicação entre processador (CPU), memória RAM, armazenamento, placa de vídeo e periféricos.",
        fullDesc: "Definem quais processadores são compatíveis (por exemplo, soquete AM5 para AMD Ryzen com chipsets B650/B840, AM4 para Ryzen com A520/B550, ou LGA 1700 para Intel de 12ª a 14ª geração com chipsets.",
        warranty: "Garantia de 12 meses com suporte técnico NexTech",
        img: "Placa Mae.jpg"
    },
    {
        id: 8,
        name: "Teclado Mecânico Branco",
        category: "perifericos",
        price: 249.75,
        desc: " O Teclado Mecânico combina  com interruptores mecânicos individuais sob cada tecla com acabamento na cor branca, oferecendo resposta tátil ou linear precisa para digitação e jogos, além de visual limpo que destaca a iluminação.",
        fullDesc:"Teclado Mecânico branco incluem modelos compactos (60% e TKL) e full size (com teclado numérico), com variações de switches, iluminação e conexão com ou sem fio.",
        warranty: "Garantia de 12 meses contra defeitos de fabricação",
        img: "Teclado.jpg"
    },

    // ================= ACESSÓRIOS =================
    {
        id: 9,
        name: "Headset Gamer",
        category: "acessorios",
        price: 299.99,
        desc: " Fone de ouvido com microfone integrado projetado para jogos eletrônicos, comunicação em equipe, transmissões ao vivo (lives) e chamadas de voz.",
        fullDesc: "modelo leve (menos de 300 g) com drivers de 50 mm, conexão P3 (3.5 mm), espuma de memória, microfone giratório para silenciar e suporte a DTS Headphone:X Spatial Audio.",
        warranty: "Garantia de 12 meses contra defeitos de fabricação",
        img: "Headset Gamer.jpg"
    },
    {
        id: 10,
        name: "Mousepad ",
        category: "acessorios",
        price: 29.99,
        desc: "Mousepad é uma superfície de apoio usada para posicionar e movimentar o mouse do computador, melhorando o deslize, a precisão do sensor e a proteção da mesa..",
        fullDesc:"Deskpad extra grande (70 x 30 cm) com superfície speed, borda costurada e base antiderrapante no padrão de cores fumê.",
        warranty: "Garantia de 6 meses contra defeitos de fabricação ápos a troca",
        img: "Mouse Pad.jpg"
    },
    {
        id: 11,
        name: "Cadeira Gamer Vermelho",
        category: "acessorios",
        price: 398.34,
        desc: "  Cadeira Gamer é tipo de cadeira projetada para longos períodos sentados, com visual inspirado em bancos de carros esportivos e recursos voltados ao conforto e ao suporte corporal.",
        fullDesc: "Modelo ergonômico com revestimento misto de mesh respirável e couro sintético, reclinação de até 135°, apoio de cabeça magnético, suporte lombar ajustável e braços 4D.",
        warranty: "Garantia de 12 meses na estrutura e mecanismo",
        img: "Cadeira Gamer.jpg"
    },
    {
        id: 12,
        name: "Microfone Gamer USB ",
        category: "acessorios",
        price: 317.40,
        desc: "microfones gamer variam conforme o tipo de cápsula (dinâmica ou condensadora), padrão polar e conexão (USB-A, USB-C, P2 ou XLR), com opções de mesa ou com braço articulado.",
        fullDesc: "Conexões USB / USB-C oferecem instalação rápida (plug and play) em PC e consoles; modelos com XLR permitem ligação a interfaces ou mesas de som para maior controle de áudio; entradas 3,5 mm (P2) são comuns em modelos básicos ou headsets.",
        warranty: "Garantia de 12 meses contra defeitos de fabricação",
        img: "Microfone.jpg"
    }
];

const CART_STORAGE_KEY = 'nexustech_cart';
const THEME_STORAGE_KEY = 'nexustech_theme';

let cart = loadCart();
let toastTimer = null;

function loadCart() {
    try {
        const saved = localStorage.getItem(CART_STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
}

function saveCart() {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
        // Ignora falhas de armazenamento em modos restritos
    }
}

function showToast(message) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2600);
}

// 2. RENDERIZAR PRODUTOS NO CATÁLOGO
function renderProducts(filter = 'todos') {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    const filtered = filter === 'todos'
        ? products
        : products.filter(p => p.category === filter);

    filtered.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}" class="product-img">
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-desc">${product.desc}</p>
                    <button type="button" class="desc-btn" onclick="openProductDetails(${product.id})">
                        <i class="fas fa-info-circle"></i> Descrição
                    </button>
                    <div class="product-footer">
                        <span class="product-price">${formatBRL(product.price)}</span>
                        <button type="button" class="add-cart-btn" onclick="addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i> Comprar
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

function filterProducts(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(category);
}

function openProductDetails(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const imgEl = document.getElementById('detail-img');
    imgEl.src = product.img;
    imgEl.alt = product.name;

    document.getElementById('detail-category').textContent = product.category;
    document.getElementById('detail-title').textContent = product.name;
    document.getElementById('detail-full-desc').textContent = product.fullDesc || product.desc;
    document.getElementById('detail-specs').innerHTML = `
        <span><i class="fas fa-microchip"></i> ${product.desc}</span>
        <span><i class="fas fa-shield-alt"></i> ${product.warranty || 'Garantia de 12 meses'}</span>
    `;
    document.getElementById('detail-price').textContent = formatBRL(product.price);

    const addBtn = document.getElementById('detail-add-btn');
    addBtn.onclick = () => {
        addToCart(product.id);
        closeModal('product-modal');
    };

    openModal('product-modal');
}

// 3. LÓGICA DO CARRINHO, PIX QR CODE E PAGAMENTO
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(`"${product.name}" adicionado ao carrinho.`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function buildPixPayload(total) {
    const amount = total.toFixed(2);
    // Payload ilustrativo para demonstração no front-end
    return `00020126360014BR.GOV.BCB.PIX0114nexustech@pix52040000530398654${String(amount.length).padStart(2, '0')}${amount}5802BR5913NEXUSTECH6009SAO PAULO62070503***6304ABCD`;
}

function renderPixQRCode(total) {
    const pixBox = document.getElementById('pix-box');
    const qrContainer = document.getElementById('pix-qrcode');
    const codeInput = document.getElementById('pix-code-input');
    if (!pixBox || !qrContainer || !codeInput) return;

    const isPixSelected = document.querySelector('input[name="payment"]:checked')?.value === 'Pix';
    if (!isPixSelected || total <= 0) {
        pixBox.classList.remove('active');
        qrContainer.innerHTML = '';
        codeInput.value = '';
        return;
    }

    const payload = buildPixPayload(total);
    codeInput.value = payload;
    qrContainer.innerHTML = '';

    if (typeof QRCode !== 'undefined') {
        new QRCode(qrContainer, {
            text: payload,
            width: 156,
            height: 156,
            colorDark: '#0f172a',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.M
        });
    }

    pixBox.classList.add('active');
}

function updateDueDateNotice(method) {
    const noticeEl = document.getElementById('due-date-notice');
    const textEl = document.getElementById('due-date-text');
    const iconEl = document.getElementById('due-date-icon');
    if (!noticeEl || !textEl) return;

    if (method === 'Boleto Bancário') {
        textEl.textContent = 'O boleto bancário possui vencimento de 4 dias.';
        if (iconEl) iconEl.className = 'fas fa-calendar-check';
        noticeEl.classList.add('active');
    } else if (method === 'Cartão de Débito') {
        textEl.textContent = 'Débito à vista: o valor é debitado diretamente da sua conta na confirmação.';
        if (iconEl) iconEl.className = 'fas fa-bolt';
        noticeEl.classList.add('active');
    } else {
        textEl.textContent = '';
        noticeEl.classList.remove('active');
    }
}

function handlePaymentChange() {
    const method = document.querySelector('input[name="payment"]:checked')?.value;
    toggleInstallments(method === 'Cartão de Crédito');
    updateDueDateNotice(method);

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    renderPixQRCode(total);
}

function copyPixCode() {
    const codeInput = document.getElementById('pix-code-input');
    if (!codeInput || !codeInput.value) return;

    navigator.clipboard?.writeText(codeInput.value);
    showToast('Código Pix copiado para a área de transferência!');
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').innerText = totalCount;

    const list = document.getElementById('cart-items-list');
    const totalEl = document.getElementById('cart-total');

    if (cart.length === 0) {
        list.innerHTML = '<p style="color: var(--text-secondary);">Seu carrinho está vazio.</p>';
        totalEl.innerText = 'R$ 0,00';
        updateInstallments(0);
        renderPixQRCode(0);
        return;
    }

    list.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.qty;
        total += subtotal;

        list.innerHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong> <small>(x${item.qty})</small><br>
                    <small style="color: var(--accent-cyan);">${formatBRL(subtotal)}</small>
                </div>
                <button type="button" onclick="removeFromCart(${index})" class="remove-item-btn" title="Remover item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });

    totalEl.innerText = formatBRL(total);
    updateInstallments(total);
    renderPixQRCode(total);
}

function toggleInstallments(show) {
    document.getElementById('installments-box').style.display = show ? 'block' : 'none';
}

function updateInstallments(total) {
    const select = document.getElementById('installments-select');
    select.innerHTML = '';
    for (let i = 1; i <= 12; i++) {
        const value = total > 0 ? total / i : 0;
        select.innerHTML += `<option value="${i}x">${i}x de ${formatBRL(value)} sem juros</option>`;
    }
}

function checkout() {
    if (cart.length === 0) {
        showToast('Adicione produtos ao carrinho antes de finalizar.');
        return;
    }
    const method = document.querySelector('input[name="payment"]:checked').value;
    let extra = '';
    if (method === 'Cartão de Crédito') {
        extra = ` (${document.getElementById('installments-select').value})`;
    } else if (method === 'Boleto Bancário') {
        extra = ' — vencimento em 4 dias';
    }
    showToast(`Pedido confirmado via ${method}${extra}. Obrigado por comprar na NexusTech!`);
    cart = [];
    saveCart();
    updateCartUI();
    closeModal('cart-modal');
}

// 4. TEMA CLARO / ESCURO
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function applyTheme(isLight) {
    document.body.classList.toggle('light-mode', isLight);
    if (isLight) {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
}

themeBtn.addEventListener('click', () => {
    const isLight = !document.body.classList.contains('light-mode');
    applyTheme(isLight);
    try {
        localStorage.setItem(THEME_STORAGE_KEY, isLight ? 'light' : 'dark');
    } catch {
        // Ignora falhas de armazenamento
    }
});

// 5. MODAIS, LOGIN, CONTATO E WHATSAPP
function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const user = email.split('@')[0];
    document.getElementById('user-label').innerText = user;
    closeModal('login-modal');
    showToast(`Bem-vindo de volta, ${user}!`);
}

function handleContact(e) {
    e.preventDefault();
    showToast('Mensagem enviada com sucesso! Nossa equipe responderá em breve.');
    e.target.reset();
}

function toggleWhatsApp() {
    document.getElementById('wa-popup').classList.toggle('active');
}

function formatBRL(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Inicializa o tema, catálogo, carrinho e estado do pagamento
try {
    applyTheme(localStorage.getItem(THEME_STORAGE_KEY) === 'light');
} catch {
    applyTheme(false);
}
renderProducts();
updateCartUI();
handlePaymentChange();
