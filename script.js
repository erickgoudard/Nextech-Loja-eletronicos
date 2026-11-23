// 1. BANCO DE DADOS DE PRODUTOS GAMER (12 PRODUTOS)
const products = [
    // ================= COMPUTADORES E CONSOLES =================
    {
        id: 1,
        name: "PC Gamer Completo Ryzen 5",
        category: "Gamer",
        price: 3799.89,
        desc: "Intel Core i7 13700F, 32GB RAM DDR5, SSD NVMe 1TB, Water Cooler RGB e RTX 4070 12GB.",
        fullDesc: "Montado e testado em bancada pela equipe NexTech para alto desempenho em Quad HD e Full HD competitivo. Conta com fluxo de ar otimizado, refrigeração líquida para manter os clocks estáveis e armazenamento NVMe de alta velocidade.",
        warranty: "Garantia de 12 meses com suporte técnico NexusTech",
        img: "img/computador.jpg"
    },
    {
        id: 2,
        name: "Nintendo Switch",
        category: "Gamer",
        price: 4299.00,
        desc: "Console híbrido com controles Joy-Con, modo portátil e modo dock para TV com alta praticidade.",
        fullDesc: "Jogue onde quiser no modo portátil ou conecte na TV para partidas em grupo. Ideal para títulos exclusivos e diversão em qualquer lugar.",
        warranty: "Garantia de 12 meses com suporte técnico NexusTech",
        img: "img/NINTENDO.jpg"
    },
    {
        id: 3,
        name: " Console Xbox Series X",
        category: "Gamer",
        price:8.29999,
        desc: " SSD NVMe personalizado com a Xbox Velocity Architecture, reduzindo carregamentos e permitindo o recurso Quick Resume para alternar entre jogos rapidamente",
        fullDesc: "CPU de 8 núcleos Zen 2 (até 3,8 GHz), GPU de 12 teraflops RDNA 2 e 16 GB de RAM GDDR6",
        warranty: "Garantia de 12 meses com suporte técnico NexTech",
        img: "img/XBOX.jpg"
    },
    {
        id: 4,
        name: "Console PlayStation 5 (PS5)",
        category: "Gamer",
        price: 6499.00,
        desc: "SSD de alta velocidade, áudio 3D, suporte a Ray Tracing e controle DualSense com resposta tátil.",
        fullDesc: "Projetado para imersão completa com gatilhos adaptáveis, resposta tátil e carregamentos quase instantâneos nos principais lançamentos.",
        warranty: "Garantia de 12 meses com suporte técnico NexusTech",
        img: "img/PS5.jpg"
    },

    // ================= ACESSÓRIOS =================
    {
        id: 5,
        name: "Fone Bluetooth Roxo",
        category: "acessorios",
        price: 389.90,
        desc: "Switches magnéticos ultra-rápidos, formato 65%, keycaps PBT Double-Shot e iluminação RGB.",
        fullDesc: "Formato compacto 65% que libera mais espaço para o mouse em mesas reduzidas. Os switches magnéticos oferecem acionamento ágil e consistente, com keycaps PBT resistentes ao desgaste.",
        warranty: "Garantia de 12 meses contra defeitos de fabricação",
        img: "img/Fone.jpg"
    },
    {
        id: 6,
        name: "Mouse Gamer Wireless Viper Pro",
        category: "perifericos",
        price: 329.00,
        desc: "Sensor óptico 26.000 DPI, peso ultraleve de 54g e bateria de até 70 horas sem fio.",
        fullDesc: "Construção ultraleve de 54g para movimentos rápidos e menos fadiga em longas sessões. Conexão sem fio de baixa latência com autonomia de até 70 horas e sensor de alta precisão.",
        warranty: "Garantia de 12 meses contra defeitos de fabricação",
        img: "img/Mouse.jpg"
    },
    {
        id: 7,
        name: "Placa Mae",
        category: "perifericos",
        price: 2199.00,
        desc: "Painel IPS 27 polegadas, resolução Quad HD, 240Hz, 1ms GTG e compatível com G-Sync.",
        fullDesc: "Combina nitidez Quad HD com taxa de atualização de 240Hz e tempo de resposta de 1ms GTG. O painel IPS entrega cores vivas e amplos ângulos de visão, com suporte a G-Sync para reduzir cortes na imagem.",
        warranty: "Garantia de 12 meses com suporte técnico NexusTech",
        img: "img/Placa Mae.jpg"
    },
    {
        id: 8,
        name: "Teclado Mecânico TKL Shadow",
        category: "perifericos",
        price: 299.90,
        desc: "Layout compacto TKL sem teclado numérico, switches lineares silenciosos e cabo USB-C removível.",
        fullDesc: "Mantém as teclas de função e setas sem o bloco numérico, oferecendo ergonomia e espaço extra para o mouse. Switches lineares silenciosos e cabo USB-C destacável facilitam o transporte.",
        warranty: "Garantia de 12 meses contra defeitos de fabricação",
        img: "img/Teclado.jpg"
    },

    // ================= ACESSÓRIOS =================
    {
        id: 9,
        name: "Headset Surround 7.1 Void",
        category: "acessorios",
        price: 449.90,
        desc: "Drivers de 50mm, microfone com cancelamento de ruído e almofadas em espuma de memória.",
        fullDesc: "Drivers de 50mm com som surround 7.1 para facilitar a localização de passos e efeitos no jogo. Almofadas em espuma de memória e microfone com cancelamento de ruído para chamadas claras.",
        warranty: "Garantia de 12 meses contra defeitos de fabricação",
        img: "img/Headset Gamer.jpg"
    },
    {
        id: 10,
        name: "Mousepad Speed XXL Nebula",
        category: "acessorios",
        price: 119.90,
        desc: "900x400mm com bordas costuradas, base emborrachada antiderrapante e superfície de baixo atrito.",
        fullDesc: "Tamanho estendido de 900x400mm que acomoda teclado e mouse com folga. Superfície speed de baixo atrito para deslizes fluidos, bordas costuradas que não desfiam e base antiderrapante.",
        warranty: "Garantia de 6 meses contra defeitos de fabricação",
        img: "img/Mouse Pad.jpg"
    },
    {
        id: 11,
        name: "Cadeira Gamer Ergonomic Pulse",
        category: "acessorios",
        price: 1349.00,
        desc: "Reclinável até 180°, ajuste de altura a gás, apoio lombar e de pescoço e braços 4D.",
        fullDesc: "Desenvolvida para longas horas de jogo, estudo ou trabalho. Possui encosto reclinável até 180°, pistão a gás, almofadas de apoio lombar e cervical e braços 4D ajustáveis.",
        warranty: "Garantia de 12 meses na estrutura e mecanismo",
        img: "img/Cadeira Gamer.jpg"
    },
    {
        id: 12,
        name: "Microfone Gamer USB Cast Pro",
        category: "acessorios",
        price: 369.00,
        desc: "Captação cardioide cristalina para lives e calls, botão mute touch e iluminação LED.",
        fullDesc: "Captação cardioide focada na sua voz com redução de ruídos laterais. Conta com botão mute sensível ao toque, controle prático e iluminação LED para compor o setup.",
        warranty: "Garantia de 12 meses contra defeitos de fabricação",
        img: "img/microfone.jpg"
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