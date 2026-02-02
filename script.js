
function formatCurrency(num) {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(num);
}
body {
    margin: 0;
    font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
    background-color: var(--bg-main);
    color: var(--text-main);
    overflow-x: hidden;
    line-height: 1.6;
}

/* --- PROFESSIONAL LOGIN SCREEN --- */
.login-overlay {
    position: fixed;
    inset: 0;
    background: radial-gradient(circle at top right, var(--sidebar-hover), var(--sidebar));
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    backdrop-filter: blur(8px);
}

.login-card {
    background: var(--white);
    padding: 2.5rem;
    border-radius: 1rem;
    box-shadow: var(--shadow-lg);
    width: 100%;
    max-width: 400px;
    border: 1px solid rgba(255,255,255,0.1);
    animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.login-card h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--sidebar);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.login-card h2 i {
    color: var(--primary);
}

.field-group {
    margin-bottom: 1.25rem;
}

.field-group label {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-main);
}

.field-group input,
.field-group select {
    width: 100%;
    padding: 0.625rem 0.875rem;
    border: 2px solid var(--border);
    border-radius: 0.5rem;
    font-size: 0.875rem;
    transition: all 0.2s;
    background: var(--white);
}

.field-group input:focus,
.field-group select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 1.25rem;
    font-weight: 600;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
    gap: 8px;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.025em;
}

.btn-primary {
    background-color: var(--primary);
    color: var(--white);
}

.btn-primary:hover {
    background-color: var(--primary-hover);
    transform: translateY(-1px);
    box-shadow: var(--shadow);
}

.btn-success {
    background-color: var(--success);
    color: var(--white);
}

.btn-success:hover {
    background-color: var(--success-hover);
    transform: translateY(-1px);
    box-shadow: var(--shadow);
}

.btn-danger {
    background-color: var(--danger);
    color: var(--white);
}

.btn-danger:hover {
    background-color: var(--danger-hover);
    transform: translateY(-1px);
    box-shadow: var(--shadow);
}

.btn-warning {
    background-color: var(--warning);
    color: var(--white);
}

.btn-warning:hover {
    background-color: var(--warning-hover);
    transform: translateY(-1px);
    box-shadow: var(--shadow);
}

.login-card p {
    margin-top: 1.5rem;
    font-size: 0.875rem;
    text-align: center;
}

.login-card a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
}

.login-card a:hover {
    text-decoration: underline;
}

/* --- SIDEBAR DESIGN --- */
.sidebar {
    width: 260px;
    background-color: var(--sidebar);
    color: var(--white);
    height: 100vh;
    position: fixed;
    padding: 1.5rem 1rem;
    box-shadow: 4px 0 10px rgba(0,0,0,0.1);
    overflow-y: auto;
}

.brand-box h1 {
    font-size: 1.25rem;
    letter-spacing: 1px;
    border-bottom: 1px solid #334155;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    font-weight: 700;
}

.brand-box h1 span {
    color: var(--primary);
}

.brand-box p {
    font-size: 0.875rem;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
}

.brand-box .btn {
    width: 100%;
    background-color: var(--danger);
    color: var(--white);
    margin-top: 1rem;
}

.brand-box .btn:hover {
    background-color: var(--danger-hover);
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0.75rem 1rem;
    color: #94a3b8;
    text-decoration: none;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.875rem;
}

.nav-item:hover,
.nav-item.active {
    background-color: var(--primary);
    color: var(--white);
    transform: translateX(5px);
}

/* --- MAIN CONTENT AREA --- */
.main-panel {
    margin-left: 260px;
    padding: 2rem;
    max-width: 1400px;
    min-height: 100vh;
}

.module-card {
    background: var(--white);
    border-radius: 0.75rem;
    padding: 1.5rem;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
    animation: fadeIn 0.4s ease-out;
    display: none;
}

.module-card.active {
    display: block;
}

.module-card h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--text-main);
    display: flex;
    align-items: center;
    gap: 10px;
}

.module-card h2 i {
    color: var(--primary);
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* --- TABLES --- */
.krt-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin-top: 1.5rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: var(--shadow);
}

.krt-table th {
    background-color: #f8fafc;
    padding: 1rem;
    text-align: left;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    border-bottom: 2px solid var(--border);
    font-weight: 600;
}

.krt-table td {
    padding: 1rem;
    border-bottom: 1px solid var(--border);
    font-size: 0.875rem;
    color: var(--text-main);
}

.krt-table tr:hover {
    background-color: #f1f5f9;
}

.krt-table tr:last-child td {
    border-bottom: none;
}

/* --- FORMS & INPUTS --- */
.form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
}

.form-grid input,
.form-grid select {
    padding: 0.625rem 0.875rem;
    border: 2px solid var(--border);
    border-radius: 0.5rem;
    font-size: 0.875rem;
    transition: all 0.2s;
    background: var(--white);
}

.form-grid input:focus,
.form-grid select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-grid button {
    padding: 0.625rem 1.25rem;
    font-weight: 600;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.025em;
}

/* --- SEARCH & BADGES --- */
.search-container {
    position: relative;
}

.search-results {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--white);
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
    border: 1px solid var(--border);
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;
    margin-top: 0.25rem;
}

.search-results div {
    padding: 0.75rem 1rem;
    cursor: pointer;
    border-bottom: 1px solid var(--border);
    transition: background-color 0.2s;
    font-size: 0.875rem;
}

.search-results div:hover {
    background-color: var(--bg-main);
}

.search-results div:last-child {
    border-bottom: none;
}

.badge {
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 700;
    display: inline-block;
}

.badge-success {
    background: #d1fae5;
    color: #065f46;
}

.badge-danger {
    background: #fee2e2;
    color: #991b1b;
}

/* --- ACTION BUTTONS --- */
.action-btn {
    padding: 0.375rem 0.75rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 600;
    margin-right: 0.5rem;
    transition: all 0.2s;
    text-transform: uppercase;
    letter-spacing: 0.025em;
}

.edit-btn {
    background-color: var(--warning);
    color: var(--white);
}

.edit-btn:hover {
    background-color: var(--warning-hover);
    transform: translateY(-1px);
}

.delete-btn {
    background-color: var(--danger);
    color: var(--white);
}

.delete-btn:hover {
    background-color: var(--danger-hover);
    transform: translateY(-1px);
}

/* --- REPORTS --- */
#reports .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

#reports .btn {
    background-color: #6366f1;
    color: var(--white);
}

#reports .btn:hover {
    background-color: #4f46e5;
    transform: translateY(-1px);
}

#print-area h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-main);
}

/* --- RESPONSIVE DESIGN --- */
@media (max-width: 768px) {
    .sidebar {
        width: 100%;
        height: auto;
        position: relative;
        padding: 1rem;
    }

    .main-panel {
        margin-left: 0;
        padding: 1rem;
    }

    .form-grid {
        grid-template-columns: 1fr;
        gap: 0.75rem;
    }

    .login-card {
        max-width: 90%;
        padding: 2rem;
    }

    .module-card {
        padding: 1rem;
    }

    .krt-table th,
    .krt-table td {
        padding: 0.75rem;
        font-size: 0.8rem;
    }

    .nav-item {
        padding: 0.625rem 0.875rem;
        font-size: 0.8rem;
    }
}

@media print {
    .no-print {
        display: none !important;
    }

    .main-panel {
        margin-left: 0;
        padding: 0;
    }

    .module-card {
        box-shadow: none;
        border: 1px solid #000;
    }

    .krt-table {
        box-shadow: none;
    }
}

/* --- UTILITIES --- */
.hidden {
    display: none;
}

.text-center {
    text-align: center;
}

.mb-4 {
    margin-bottom: 1rem;
}
    // P&L Calculation Logic
const items = [...new Set(db.in.map(x => x.item))];
let totalCost = 0, totalRev = 0;
let pnlHtml = "";

items.forEach(i => {
    // Average Cost Price Nikalne ka formula
    const inEntries = db.in.filter(x => x.item === i);
    const totalInQty = inEntries.reduce((s,c) => s + c.qty, 0);
    const avgCost = inEntries.reduce((s,c) => s + (c.qty * c.rate), 0) / totalInQty || 0;

    // Sales Data
    const outEntries = db.out.filter(x => x.item === i);
    const qtySold = outEntries.reduce((s,c) => s + c.qty, 0);
    const totalSaleVal = outEntries.reduce((s,c) => s + (c.qty * c.rate), 0);
    
    const profit = totalSaleVal - (qtySold * avgCost);
    totalCost += (qtySold * avgCost);
    totalRev += totalSaleVal;

    pnlHtml += `
        <tr>
            <td><strong>${i}</strong></td>
            <td>${avgCost.toFixed(2)}</td>
            <td>${(totalSaleVal/qtySold || 0).toFixed(2)}</td>
            <td>${qtySold}</td>
            <td style="color:${profit >= 0 ? 'green' : 'red'}; font-weight:bold;">${profit.toFixed(2)}</td>
        </tr>`;
});

document.getElementById('pnl-body-table').innerHTML = pnlHtml;
document.getElementById('total-cost-val').innerText = totalCost.toFixed(2);
document.getElementById('total-rev-val').innerText = totalRev.toFixed(2);
document.getElementById('net-profit-val').innerText = (totalRev - totalCost).toFixed(2);
function renderAll() {
    const items = [...new Set(db.in.map(x => x.item))];
    
    // Dropdown ko products se bharne ke liye (sirf ek baar ya refresh par)
    const filterSelect = document.getElementById('pnl-filter');
    const currentSelection = filterSelect.value;
    filterSelect.innerHTML = `<option value="ALL">--- ALL PRODUCTS ---</option>` + 
        items.map(i => `<option value="${i}" ${currentSelection === i ? 'selected' : ''}>${i}</option>`).join('');

    let totalCost = 0, totalRev = 0;
    let pnlHtml = "";

    // Filter apply karna
    const filteredItems = currentSelection === "ALL" ? items : items.filter(x => x === currentSelection);

    filteredItems.forEach(i => {
        const inEntries = db.in.filter(x => x.item === i);
        const totalInQty = inEntries.reduce((s,c) => s + c.qty, 0);
        const avgCost = inEntries.reduce((s,c) => s + (c.qty * c.rate), 0) / totalInQty || 0;

        const outEntries = db.out.filter(x => x.item === i);
        const qtySold = outEntries.reduce((s,c) => s + c.qty, 0);
        const totalSaleVal = outEntries.reduce((s,c) => s + (c.qty * c.rate), 0);
        
        const profit = totalSaleVal - (qtySold * avgCost);
        
        // Sirf filtered items ka total calculate hoga
        totalCost += (qtySold * avgCost);
        totalRev += totalSaleVal;

        pnlHtml += `
            <tr>
                <td><strong>${i}</strong></td>
                <td>${avgCost.toFixed(2)}</td>
                <td>${(totalSaleVal/qtySold || 0).toFixed(2)}</td>
                <td>${qtySold}</td>
                <td style="color:${profit >= 0 ? 'green' : 'red'}; font-weight:bold;">${profit.toFixed(2)}</td>
            </tr>`;
    });

    // Tables aur Stats update karna
    document.getElementById('pnl-body-table').innerHTML = pnlHtml;
    document.getElementById('total-cost-val').innerText = totalCost.toFixed(2);
    document.getElementById('total-rev-val').innerText = totalRev.toFixed(2);
    document.getElementById('net-profit-val').innerText = (totalRev - totalCost).toFixed(2);

    // Baaki functions (Stock Balance, etc.) yahan niche chaltay rahen ge...
}
    function renderReports(fromDate = '', toDate = '') {
    // 1. Stock IN Report Filter
    let filteredIn = db.in.filter(x => 
        (!fromDate || x.date >= fromDate) && (!toDate || x.date <= toDate)
    );
    
    document.getElementById('report-in-body').innerHTML = filteredIn.map(x => 
        `<tr>
            <td>${x.date}</td>
            <td>${x.vendor}</td>
            <td>${x.item}</td>
            <td>${x.qty}</td>
            <td>${x.rate}</td>
            <td>${(x.qty * x.rate).toFixed(2)}</td>
        </tr>`
    ).join('') || '<tr><td colspan="6" style="text-align:center">No Purchase Data Found</td></tr>';

    // 2. Stock OUT Report Filter
    let filteredOut = db.out.filter(x => 
        (!fromDate || x.date >= fromDate) && (!toDate || x.date <= toDate)
    );

    document.getElementById('report-out-body').innerHTML = filteredOut.map(x => 
        `<tr>
            <td>${x.date}</td>
            <td>${x.customer}</td>
            <td>${x.item}</td>
            <td>${x.qty}</td>
            <td>${x.rate}</td>
            <td>${(x.qty * x.rate).toFixed(2)}</td>
        </tr>`
    ).join('') || '<tr><td colspan="6" style="text-align:center">No Sales Data Found</td></tr>';
}
    // --- DATABASE LOGIC ---
        let db = JSON.parse(localStorage.getItem('krt_db')) || { in: [], out: [], users: [{u:'admin', p:'admin123', r:'admin'}] };
        let editIndex = null;

        function saveData() { localStorage.setItem('krt_db', JSON.stringify(db)); }

        // --- AUTH LOGIC ---
        function toggleAuth(type) {
            document.getElementById('login-box').style.display = type === 'login' ? 'block' : 'none';
            document.getElementById('reg-box').style.display = type === 'reg' ? 'block' : 'none';
        }

        document.getElementById('login-form').onsubmit = function(e) {
            e.preventDefault();
            const u = document.getElementById('username').value;
            const p = document.getElementById('password').value;
            const user = db.users.find(x => x.u === u && x.p === p);
            if(user) {
                document.getElementById('login-overlay').style.display = 'none';
                document.getElementById('main-app').classList.remove('hidden');
                document.getElementById('display-user').innerText = u;
                renderAll();
            } else { alert("Invalid Username/Password!"); }
        };

        // --- CORE FUNCTIONS ---
        function showTab(id, el) {
            document.querySelectorAll('.module-card').forEach(m => m.classList.remove('active'));
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            document.getElementById(id).classList.add('active');
            el.classList.add('active');
            renderAll();
        }

        // Handle Stock IN
        document.getElementById('in-form').onsubmit = function(e) {
            e.preventDefault();
            const entry = {
                date: document.getElementById('in-date').value,
                vendor: document.getElementById('in-vendor').value,
                item: document.getElementById('in-item').value.toUpperCase(),
                qty: parseFloat(document.getElementById('in-qty').value),
                rate: parseFloat(document.getElementById('in-rate').value || 0)
            };
            if(editIndex !== null) { db.in[editIndex] = entry; editIndex = null; } 
            else { db.in.push(entry); }
            saveData(); renderAll(); e.target.reset();
        };

        // Handle Stock OUT
        document.getElementById('out-form').onsubmit = function(e) {
            e.preventDefault();
            const item = document.getElementById('out-item').value.toUpperCase();
            const qty = parseFloat(document.getElementById('out-qty').value);
            const totalIn = db.in.filter(x => x.item === item).reduce((s, c) => s + c.qty, 0);
            const totalOut = db.out.filter(x => x.item === item).reduce((s, c) => s + c.qty, 0);
            
            if((totalIn - totalOut) < qty) { alert("Insufficient Stock!"); return; }

            const entry = {
                date: document.getElementById('out-date').value,
                customer: document.getElementById('out-customer').value,
                item: item,
                qty: qty,
                rate: parseFloat(document.getElementById('out-rate').value || 0)
            };
            if(editIndex !== null) { db.out[editIndex] = entry; editIndex = null; } 
            else { db.out.push(entry); }
            saveData(); renderAll(); e.target.reset();
        };

        // FIXED REPORTS LOGIC
        function filterReports() {
            const from = document.getElementById('report-from-date').value;
            const to = document.getElementById('report-to-date').value;
            renderReports(from, to);
        }

        function renderReports(fromDate = '', toDate = '') {
            // Render Stock IN Report
            let filteredIn = db.in.filter(x => (!fromDate || x.date >= fromDate) && (!toDate || x.date <= toDate));
            document.getElementById('report-in-body').innerHTML = filteredIn.map(x => 
                `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td></tr>`
            ).join('') || '<tr><td colspan="6" style="text-align:center">No Data</td></tr>';

            // Render Stock OUT Report
            let filteredOut = db.out.filter(x => (!fromDate || x.date >= fromDate) && (!toDate || x.date <= toDate));
            document.getElementById('report-out-body').innerHTML = filteredOut.map(x => 
                `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td></tr>`
            ).join('') || '<tr><td colspan="6" style="text-align:center">No Data</td></tr>';
        }

        function renderAll() {
            const items = [...new Set(db.in.map(x => x.item))];
            
            // 1. Stock Balance
            document.getElementById('bal-body').innerHTML = items.map(i => {
                const tin = db.in.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
                const tout = db.out.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
                const avail = tin - tout;
                const status = avail <= 5 ? '<span class="badge badge-danger">Low Stock</span>' : '<span class="badge badge-success">In Stock</span>';
                return `<tr><td><strong>${i}</strong></td><td>${tin}</td><td>${tout}</td><td style="color:${avail<=5?'red':'green'}">${avail}</td><td>${status}</td></tr>`;
            }).join('');

            // 2. Stock In/Out Logs
            document.getElementById('in-body').innerHTML = db.in.slice().reverse().map((x, idx) => `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td><td><button onclick="editEntry('in', ${db.in.length-1-idx})">Edit</button></td></tr>`).join('');
            document.getElementById('out-body').innerHTML = db.out.slice().reverse().map((x, idx) => `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td><td><button onclick="editEntry('out', ${db.out.length-1-idx})">Edit</button></td></tr>`).join('');

            // 3. Profit & Loss with Filter
            const pnlFilter = document.getElementById('pnl-filter');
            const selection = pnlFilter.value;
            pnlFilter.innerHTML = `<option value="ALL">--- ALL PRODUCTS ---</option>` + items.map(i => `<option value="${i}" ${selection===i?'selected':''}>${i}</option>`).join('');
            
            let tCost = 0, tRev = 0, pnlRows = "";
            const filteredForPnl = selection === "ALL" ? items : items.filter(x => x === selection);

            filteredForPnl.forEach(i => {
                const inData = db.in.filter(x => x.item === i);
                const avgCost = (inData.reduce((s,c) => s+(c.qty*c.rate),0) / inData.reduce((s,c) => s+c.qty,0)) || 0;
                const outData = db.out.filter(x => x.item === i);
                const qSold = outData.reduce((s,c) => s+c.qty,0);
                const rev = outData.reduce((s,c) => s+(c.qty*c.rate),0);
                const profit = rev - (qSold * avgCost);
                tCost += (qSold * avgCost); tRev += rev;
                pnlRows += `<tr><td>${i}</td><td>${avgCost.toFixed(2)}</td><td>${(rev/qSold || 0).toFixed(2)}</td><td>${qSold}</td><td style="color:${profit>=0?'green':'red'}">${profit.toFixed(2)}</td></tr>`;
            });
            document.getElementById('pnl-body-table').innerHTML = pnlRows;
            document.getElementById('total-cost-val').innerText = tCost.toFixed(2);
            document.getElementById('total-rev-val').innerText = tRev.toFixed(2);
            document.getElementById('net-profit-val').innerText = (tRev - tCost).toFixed(2);

            renderReports();
        }

        // Helper functions
        function editEntry(type, idx) { editIndex = idx; showTab(type==='in'?'stockin':'stockout', document.querySelector('.nav-item')); }
        function searchStock(v){/* logic remains same */}
        
        window.onload = () => { renderAll(); };
   // --- DATABASE LOGIC ---
let db = JSON.parse(localStorage.getItem('krt_db')) || { in: [], out: [], users: [{u:'admin', p:'admin123', r:'admin'}] };
let editIndex = null;

function saveData() { 
    localStorage.setItem('krt_db', JSON.stringify(db)); 
    renderAll(); // Har save par sab update hoga
}

// --- AUTH LOGIC ---
function toggleAuth(type) {
    document.getElementById('login-box').style.display = type === 'login' ? 'block' : 'none';
    document.getElementById('reg-box').style.display = type === 'reg' ? 'block' : 'none';
}

document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    const user = db.users.find(x => x.u === u && x.p === p);
    if(user) {
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('main-app').classList.remove('hidden');
        document.getElementById('display-user').innerText = u;
        renderAll();
    } else { alert("Invalid Username/Password!"); }
};

// --- NAVIGATION ---
function showTab(id, el) {
    document.querySelectorAll('.module-card').forEach(m => m.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if(el) el.classList.add('active');
    renderAll();
}

// --- STOCK IN / OUT HANDLERS ---
document.getElementById('in-form').onsubmit = function(e) {
    e.preventDefault();
    const entry = {
        date: document.getElementById('in-date').value,
        vendor: document.getElementById('in-vendor').value,
        item: document.getElementById('in-item').value.toUpperCase(),
        qty: parseFloat(document.getElementById('in-qty').value),
        rate: parseFloat(document.getElementById('in-rate').value || 0)
    };
    if(editIndex !== null) { db.in[editIndex] = entry; editIndex = null; document.querySelector('#in-form button').innerText = "SAVE ENTRY"; } 
    else { db.in.push(entry); }
    saveData(); e.target.reset();
};

document.getElementById('out-form').onsubmit = function(e) {
    e.preventDefault();
    const item = document.getElementById('out-item').value.toUpperCase();
    const qty = parseFloat(document.getElementById('out-qty').value);
    
    // Stock Check
    const tin = db.in.filter(x => x.item === item).reduce((s, c) => s + c.qty, 0);
    const tout = db.out.filter(x => x.item === item).reduce((s, c) => s + c.qty, 0);
    if((tin - tout) < qty && editIndex === null) { alert("Insufficient Stock!"); return; }

    const entry = {
        date: document.getElementById('out-date').value,
        customer: document.getElementById('out-customer').value,
        item: item,
        qty: qty,
        rate: parseFloat(document.getElementById('out-rate').value || 0)
    };
    if(editIndex !== null) { db.out[editIndex] = entry; editIndex = null; document.querySelector('#out-form button').innerText = "SAVE SALE"; } 
    else { db.out.push(entry); }
    saveData(); e.target.reset();
};

// --- REPORTS LOGIC ---
function filterReports() {
    const from = document.getElementById('report-from-date').value;
    const to = document.getElementById('report-to-date').value;
    renderReports(from, to);
}

function renderReports(fromDate = '', toDate = '') {
    const filterFn = x => (!fromDate || x.date >= fromDate) && (!toDate || x.date <= toDate);
    
    // In Report
    const filteredIn = db.in.filter(filterFn);
    document.getElementById('report-in-body').innerHTML = filteredIn.map(x => 
        `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td></tr>`
    ).join('') || '<tr><td colspan="6" class="text-center">No Data</td></tr>';

    // Out Report
    const filteredOut = db.out.filter(filterFn);
    document.getElementById('report-out-body').innerHTML = filteredOut.map(x => 
        `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td></tr>`
    ).join('') || '<tr><td colspan="6" class="text-center">No Data</td></tr>';
}

// --- RENDER EVERYTHING ---
function renderAll() {
    const items = [...new Set(db.in.map(x => x.item))];

    // 1. Stock Balance
    document.getElementById('bal-body').innerHTML = items.map(i => {
        const tin = db.in.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const tout = db.out.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const avail = tin - tout;
        const status = avail <= 5 ? '<span class="badge badge-danger">Low Stock</span>' : '<span class="badge badge-success">In Stock</span>';
        return `<tr><td><strong>${i}</strong></td><td>${tin}</td><td>${tout}</td><td style="color:${avail<=5?'red':'green'}">${avail}</td><td>${status}</td></tr>`;
    }).join('');

    // 2. Logs with Edit/Delete
    const logMap = (x, i, type) => `<tr><td>${x.date}</td><td>${type==='in'?x.vendor:x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td><td class="no-print">
        <button class="action-btn edit-btn" onclick="editEntry('${type}', ${i})">Edit</button>
        <button class="action-btn delete-btn" onclick="deleteEntry('${type}', ${i})">Del</button>
    </td></tr>`;

    document.getElementById('in-body').innerHTML = db.in.map((x,i) => logMap(x,i,'in')).reverse().join('');
    document.getElementById('out-body').innerHTML = db.out.map((x,i) => logMap(x,i,'out')).reverse().join('');

    // 3. P&L Section
    const pnlFilter = document.getElementById('pnl-filter');
    const selection = pnlFilter.value || "ALL";
    pnlFilter.innerHTML = `<option value="ALL">--- ALL PRODUCTS ---</option>` + items.map(i => `<option value="${i}" ${selection===i?'selected':''}>${i}</option>`).join('');

    let tCost = 0, tRev = 0, pnlRows = "";
    const filteredForPnl = selection === "ALL" ? items : items.filter(x => x === selection);

    filteredForPnl.forEach(i => {
        const inData = db.in.filter(x => x.item === i);
        const avgCost = (inData.reduce((s,c) => s+(c.qty*c.rate),0) / inData.reduce((s,c) => s+c.qty,0)) || 0;
        const outData = db.out.filter(x => x.item === i);
        const qSold = outData.reduce((s,c) => s+c.qty,0);
        const rev = outData.reduce((s,c) => s+(c.qty*c.rate),0);
        const profit = rev - (qSold * avgCost);
        tCost += (qSold * avgCost); tRev += rev;
        pnlRows += `<tr><td>${i}</td><td>${avgCost.toFixed(2)}</td><td>${(rev/qSold || 0).toFixed(2)}</td><td>${qSold}</td><td style="color:${profit>=0?'green':'red'}">${profit.toFixed(2)}</td></tr>`;
    });
    document.getElementById('pnl-body-table').innerHTML = pnlRows;
    document.getElementById('total-cost-val').innerText = tCost.toFixed(2);
    document.getElementById('total-rev-val').innerText = tRev.toFixed(2);
    document.getElementById('net-profit-val').innerText = (tRev - tCost).toFixed(2);

    renderReports(); // Report hamesha up-to-date rahegi
}

function editEntry(type, idx) {
    editIndex = idx;
    const item = db[type][idx];
    if(type === 'in') {
        document.getElementById('in-date').value = item.date;
        document.getElementById('in-vendor').value = item.vendor;
        document.getElementById('in-item').value = item.item;
        document.getElementById('in-qty').value = item.qty;
        document.getElementById('in-rate').value = item.rate;
        document.querySelector('#in-form button').innerText = "UPDATE ENTRY";
        showTab('stockin');
    } else {
        document.getElementById('out-date').value = item.date;
        document.getElementById('out-customer').value = item.customer;
        document.getElementById('out-item').value = item.item;
        document.getElementById('out-qty').value = item.qty;
        document.getElementById('out-rate').value = item.rate;
        document.querySelector('#out-form button').innerText = "UPDATE SALE";
        showTab('stockout');
    }
}

function deleteEntry(type, idx) {
    if(confirm("Delete this record?")) {
        db[type].splice(idx, 1);
        saveData();
    }
}

function searchStock(val) {
    const res = document.getElementById('search-res');
    res.innerHTML = "";
    if(!val) return;
    const items = [...new Set(db.in.map(x => x.item))];
    items.filter(x => x.includes(val.toUpperCase())).forEach(i => {
        const d = document.createElement('div');
        d.innerText = i;
        d.onclick = () => { document.getElementById('out-item').value = i; res.innerHTML = ""; };
        res.appendChild(d);
    });
}

window.onload = () => { renderAll(); }; 
// --- DATABASE INITIALIZATION ---
let db = JSON.parse(localStorage.getItem('krt_db')) || { in: [], out: [], users: [{u:'admin', p:'admin123'}] };

function saveData() { 
    localStorage.setItem('krt_db', JSON.stringify(db)); 
    renderAll(); // Har save par Reports aur Tables khud update hongi
}

// --- AUTOMATIC RENDERING LOGIC ---
function renderAll() {
    // 1. Stock In Log (Jo aapne entry ki)
    const inBody = document.getElementById('in-body');
    if(inBody) {
        inBody.innerHTML = db.in.slice().reverse().map((x, i) => `
            <tr>
                <td>${x.date}</td>
                <td>${x.vendor}</td>
                <td>${x.item}</td>
                <td>${x.qty}</td>
                <td>${x.rate}</td>
                <td>${(x.qty * x.rate).toFixed(2)}</td>
            </tr>
        `).join('');
    }

    // 2. Stock Out Log (Jo aapne sale ki)
    const outBody = document.getElementById('out-body');
    if(outBody) {
        outBody.innerHTML = db.out.slice().reverse().map((x, i) => `
            <tr>
                <td>${x.date}</td>
                <td>${x.customer}</td>
                <td>${x.item}</td>
                <td>${x.qty}</td>
                <td>${x.rate}</td>
                <td>${(x.qty * x.rate).toFixed(2)}</td>
            </tr>
        `).join('');
    }

    // 3. DAILY REPORTS (Automatic Load)
    // Jab bhi page load ho ya entry ho, ye function default reports dikhayega
    renderReports(); 
}

// --- DATE SEARCH & OLD ENTRY FILTER ---
function filterReports() {
    const fromDate = document.getElementById('report-from-date').value;
    const toDate = document.getElementById('report-to-date').value;
    
    if(!fromDate || !toDate) {
        alert("Please select both From and To dates");
        return;
    }
    renderReports(fromDate, toDate);
}

function renderReports(fromDate = '', toDate = '') {
    // Filter Function
    const isBetween = (date) => {
        if (!fromDate || !toDate) return true; // Agar date select nahi ki to sab dikhao
        return date >= fromDate && date <= toDate;
    };

    // Table 1: Stock In (Purchases) Report
    const repIn = db.in.filter(x => isBetween(x.date));
    document.getElementById('report-in-body').innerHTML = repIn.map(x => `
        <tr>
            <td>${x.date}</td>
            <td>${x.vendor}</td>
            <td>${x.item}</td>
            <td>${x.qty}</td>
            <td>${x.rate}</td>
            <td>${(x.qty * x.rate).toFixed(2)}</td>
        </tr>
    `).join('') || '<tr><td colspan="6" class="text-center">No matching entries found</td></tr>';

    // Table 2: Stock Out (Sales) Report
    const repOut = db.out.filter(x => isBetween(x.date));
    document.getElementById('report-out-body').innerHTML = repOut.map(x => `
        <tr>
            <td>${x.date}</td>
            <td>${x.customer}</td>
            <td>${x.item}</td>
            <td>${x.qty}</td>
            <td>${x.rate}</td>
            <td>${(x.qty * x.rate).toFixed(2)}</td>
        </tr>
    `).join('') || '<tr><td colspan="6" class="text-center">No matching entries found</td></tr>';
}

// --- INITIAL LOAD ---
window.onload = () => {
    renderAll();
};
// --- DATABASE LOGIC ---
let db = JSON.parse(localStorage.getItem('krt_db')) || { in: [], out: [], users: [{u:'admin', p:'admin123', r:'admin'}] };
let editIndex = null;

// Is function ko har bar data change hone par call karna zaroori hai
function saveData() { 
    localStorage.setItem('krt_db', JSON.stringify(db)); 
    renderAll(); // Ye line sab kuch khud update karegi
}

// --- AUTH LOGIC ---
function toggleAuth(type) {
    document.getElementById('login-box').style.display = type === 'login' ? 'block' : 'none';
    document.getElementById('reg-box').style.display = type === 'reg' ? 'block' : 'none';
}

document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    const user = db.users.find(x => x.u === u && x.p === p);
    if(user) {
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('main-app').classList.remove('hidden');
        document.getElementById('display-user').innerText = u;
        renderAll();
    } else { alert("Invalid Username/Password!"); }
};

// --- NAVIGATION ---
function showTab(id, el) {
    document.querySelectorAll('.module-card').forEach(m => m.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if(el) el.classList.add('active');
    renderAll();
}

// --- STOCK IN HANDLER ---
document.getElementById('in-form').onsubmit = function(e) {
    e.preventDefault();
    const entry = {
        date: document.getElementById('in-date').value,
        vendor: document.getElementById('in-vendor').value,
        item: document.getElementById('in-item').value.toUpperCase(),
        qty: parseFloat(document.getElementById('in-qty').value),
        rate: parseFloat(document.getElementById('in-rate').value || 0)
    };

    if(editIndex !== null) {
        db.in[editIndex] = entry;
        editIndex = null;
        document.querySelector('#in-form button').innerText = 'SAVE ENTRY';
    } else {
        db.in.push(entry);
    }
    saveData(); 
    e.target.reset();
    document.getElementById('in-date').valueAsDate = new Date();
};

// --- STOCK OUT HANDLER ---
document.getElementById('out-form').onsubmit = function(e) {
    e.preventDefault();
    const item = document.getElementById('out-item').value.toUpperCase();
    const qty = parseFloat(document.getElementById('out-qty').value);
    
    // Stock Check Logic
    const tin = db.in.filter(x => x.item === item).reduce((s, c) => s + c.qty, 0);
    const tout = db.out.filter(x => x.item === item).reduce((s, c) => s + c.qty, 0);
    if((tin - tout) < qty) { alert("Insufficient Stock!"); return; }

    const entry = {
        date: document.getElementById('out-date').value,
        customer: document.getElementById('out-customer').value,
        item: item,
        qty: qty,
        rate: parseFloat(document.getElementById('out-rate').value || 0)
    };

    if(editIndex !== null) {
        db.out[editIndex] = entry;
        editIndex = null;
        document.querySelector('#out-form button').innerText = 'SAVE SALE';
    } else {
        db.out.push(entry);
    }
    saveData(); 
    e.target.reset();
    document.getElementById('out-date').valueAsDate = new Date();
};

// --- AUTO SEARCH LOGIC ---
function searchStock(val) {
    const res = document.getElementById('search-res');
    res.innerHTML = "";
    if(!val) return;
    const items = [...new Set(db.in.map(x => x.item))];
    items.filter(x => x.includes(val.toUpperCase())).forEach(i => {
        const d = document.createElement('div');
        d.innerText = i;
        d.onclick = () => { document.getElementById('out-item').value = i; res.innerHTML = ""; };
        res.appendChild(d);
    });
}

// --- REPORTS LOGIC (Fixed IDs) ---
function filterReports() {
    const from = document.getElementById('report-from-date').value;
    const to = document.getElementById('report-to-date').value;
    renderReports(from, to);
}

function renderReports(fromDate = '', toDate = '') {
    const filterFn = (x) => (!fromDate || x.date >= fromDate) && (!toDate || x.date <= toDate);

    // Stock In Report Table
    const inData = db.in.filter(filterFn);
    document.getElementById('report-in-body').innerHTML = inData.map(x => 
        `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td></tr>`
    ).join('') || '<tr><td colspan="6">No Records</td></tr>';

    // Stock Out Report Table
    const outData = db.out.filter(filterFn);
    document.getElementById('report-out-body').innerHTML = outData.map(x => 
        `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td></tr>`
    ).join('') || '<tr><td colspan="6">No Records</td></tr>';
}

// --- MASTER RENDERER ---
function renderAll() {
    const items = [...new Set(db.in.map(x => x.item))];

    // 1. Stock Balance Table
    document.getElementById('bal-body').innerHTML = items.map(i => {
        const tin = db.in.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const tout = db.out.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const avail = tin - tout;
        const status = avail <= 5 ? '<span class="badge badge-danger">Low Stock</span>' : '<span class="badge badge-success">In Stock</span>';
        return `<tr><td>${i}</td><td>${tin}</td><td>${tout}</td><td>${avail}</td><td>${status}</td></tr>`;
    }).join('');

    // 2. Stock In Log
    document.getElementById('in-body').innerHTML = db.in.slice().reverse().map((x, idx) => 
        `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td><td class="no-print">
            <button class="action-btn edit-btn" onclick="editEntry('in', ${db.in.length - 1 - idx})">Edit</button>
            <button class="action-btn delete-btn" onclick="deleteEntry('in', ${db.in.length - 1 - idx})">Delete</button>
        </td></tr>`
    ).join('');

    // 3. Stock Out Log
    document.getElementById('out-body').innerHTML = db.out.slice().reverse().map((x, idx) => 
        `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td><td class="no-print">
            <button class="action-btn edit-btn" onclick="editEntry('out', ${db.out.length - 1 - idx})">Edit</button>
            <button class="action-btn delete-btn" onclick="deleteEntry('out', ${db.out.length - 1 - idx})">Delete</button>
        </td></tr>`
    ).join('');

    // 4. Update Profit & Loss
    renderPNL(items);

    // 5. Update Reports
    renderReports();
}

function renderPNL(items) {
    let tCost = 0, tRev = 0, rows = "";
    items.forEach(i => {
        const inEntries = db.in.filter(x => x.item === i);
        const avgCost = (inEntries.reduce((s,c) => s+(c.qty*c.rate),0) / inEntries.reduce((s,c) => s+c.qty,0)) || 0;
        const outEntries = db.out.filter(x => x.item === i);
        const qSold = outEntries.reduce((s,c) => s+c.qty,0);
        const rev = outEntries.reduce((s,c) => s+(c.qty*c.rate),0);
        const profit = rev - (qSold * avgCost);
        tCost += (qSold * avgCost); tRev += rev;
        rows += `<tr><td>${i}</td><td>${avgCost.toFixed(2)}</td><td>${(rev/qSold || 0).toFixed(2)}</td><td>${qSold}</td><td style="color:${profit>=0?'green':'red'}">${profit.toFixed(2)}</td></tr>`;
    });
    document.getElementById('pnl-body-table').innerHTML = rows;
    document.getElementById('total-cost-val').innerText = tCost.toFixed(2);
    document.getElementById('total-rev-val').innerText = tRev.toFixed(2);
    document.getElementById('net-profit-val').innerText = (tRev - tCost).toFixed(2);
}

// Edit & Delete Helpers
function editEntry(type, index) {
    editIndex = index;
    const entry = db[type][index];
    if(type === 'in') {
        document.getElementById('in-date').value = entry.date;
        document.getElementById('in-vendor').value = entry.vendor;
        document.getElementById('in-item').value = entry.item;
        document.getElementById('in-qty').value = entry.qty;
        document.getElementById('in-rate').value = entry.rate;
        document.querySelector('#in-form button').innerText = 'UPDATE ENTRY';
        showTab('stockin');
    } else {
        document.getElementById('out-date').value = entry.date;
        document.getElementById('out-customer').value = entry.customer;
        document.getElementById('out-item').value = entry.item;
        document.getElementById('out-qty').value = entry.qty;
        document.getElementById('out-rate').value = entry.rate;
        document.querySelector('#out-form button').innerText = 'UPDATE SALE';
        showTab('stockout');
    }
}

function deleteEntry(type, index) {
    if(confirm('Delete this entry?')) {
        db[type].splice(index, 1);
        saveData();
    }
}

window.onload = () => { 
    document.getElementById('in-date').valueAsDate = new Date(); 
    document.getElementById('out-date').valueAsDate = new Date(); 
    if(!document.getElementById('main-app').classList.contains('hidden')) renderAll();
};

    // --- DATABASE LOGIC ---
    let db = JSON.parse(localStorage.getItem('krt_db')) || { in: [], out: [], users: [{u:'admin', p:'admin123', r:'admin'}] };
    let editIndex = null; // For editing entries

    function saveData() { localStorage.setItem('krt_db', JSON.stringify(db)); }

    // --- AUTH LOGIC ---
    function toggleAuth(type) {
        document.getElementById('login-box').style.display = type === 'login' ? 'block' : 'none';
        document.getElementById('reg-box').style.display = type === 'reg' ? 'block' : 'none';
    }

    document.getElementById('login-form').onsubmit = function(e) {
        e.preventDefault();
        const u = document.getElementById('username').value;
        const p = document.getElementById('password').value;
        const user = db.users.find(x => x.u === u && x.p === p);
        if(user) {
            document.getElementById('login-overlay').style.display = 'none';
            document.getElementById('main-app').classList.remove('hidden');
            document.getElementById('display-user').innerText = u;
            renderAll();
        } else { alert("Invalid Username/Password!"); }
    };

    document.getElementById('reg-form').onsubmit = function(e) {
        e.preventDefault();
        db.users.push({u: document.getElementById('reg-user').value, p: document.getElementById('reg-pass').value, r: document.getElementById('reg-role').value});
        saveData(); alert("User Created!"); toggleAuth('login');
    };

    // --- CORE FUNCTIONS ---
    function showTab(id, el) {
        document.querySelectorAll('.module-card').forEach(m => m.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        el.classList.add('active');
        renderAll();
    }

    document.getElementById('in-form').onsubmit = function(e) {
        e.preventDefault();
        if(editIndex !== null) {
            db.in[editIndex] = {
                date: document.getElementById('in-date').value,
                vendor: document.getElementById('in-vendor').value,
                item: document.getElementById('in-item').value.toUpperCase(),
                qty: parseFloat(document.getElementById('in-qty').value),
                rate: parseFloat(document.getElementById('in-rate').value || 0)
            };
            editIndex = null;
            document.querySelector('#in-form button').innerText = 'SAVE ENTRY';
        } else {
            db.in.push({
                date: document.getElementById('in-date').value,
                vendor: document.getElementById('in-vendor').value,
                item: document.getElementById('in-item').value.toUpperCase(),
                qty: parseFloat(document.getElementById('in-qty').value),
                rate: parseFloat(document.getElementById('in-rate').value || 0)
            });
        }
        saveData(); renderAll(); e.target.reset();
    };

    document.getElementById('out-form').onsubmit = function(e) {
        e.preventDefault();
        const item = document.getElementById('out-item').value.toUpperCase();
        const qty = parseFloat(document.getElementById('out-qty').value);
        
        // Stock Check
        const totalIn = db.in.filter(x => x.item === item).reduce((s, c) => s + c.qty, 0);
        const totalOut = db.out.filter(x => x.item === item).reduce((s, c) => s + c.qty, 0);
        if((totalIn - totalOut) < qty) { alert("Insufficient Stock!"); return; }

        if(editIndex !== null) {
            db.out[editIndex] = {
                date: document.getElementById('out-date').value,
                customer: document.getElementById('out-customer').value,
                item: item,
                qty: qty,
                rate: parseFloat(document.getElementById('out-rate').value || 0)
            };
            editIndex = null;
            document.querySelector('#out-form button').innerText = 'SAVE SALE';
        } else {
            db.out.push({
                date: document.getElementById('out-date').value,
                customer: document.getElementById('out-customer').value,
                item: item,
                qty: qty,
                rate: parseFloat(document.getElementById('out-rate').value || 0)
            });
        }
        saveData(); renderAll(); e.target.reset();
    };

    function searchStock(val) {
        const res = document.getElementById('search-res');
        res.innerHTML = "";
        if(!val) return;
        const items = [...new Set(db.in.map(x => x.item))];
        items.filter(x => x.includes(val.toUpperCase())).forEach(i => {
            const d = document.createElement('div');
            d.innerText = i;
            d.onclick = () => { document.getElementById('out-item').value = i; res.innerHTML = ""; };
            res.appendChild(d);
        });
    }

    function editEntry(type, index) {
        editIndex = index;
        const entry = db[type][index];
        if(type === 'in') {
            document.getElementById('in-date').value = entry.date;
            document.getElementById('in-vendor').value = entry.vendor;
            document.getElementById('in-item').value = entry.item;
            document.getElementById('in-qty').value = entry.qty;
            document.getElementById('in-rate').value = entry.rate;
            document.querySelector('#in-form button').innerText = 'UPDATE ENTRY';
            showTab('stockin', document.querySelector('.nav-item[onclick*="stockin"]'));
        } else {
            document.getElementById('out-date').value = entry.date;
            document.getElementById('out-customer').value = entry.customer;
            document.getElementById('out-item').value = entry.item;
            document.getElementById('out-qty').value = entry.qty;
            document.getElementById('out-rate').value = entry.rate;
            document.querySelector('#out-form button').innerText = 'UPDATE SALE';
            showTab('stockout', document.querySelector('.nav-item[onclick*="stockout"]'));
        }
    }

    function deleteEntry(type, index) {
        if(confirm('Are you sure you want to delete this entry?')) {
            db[type].splice(index, 1);
            saveData();
            renderAll();
        }
    }

    function filterReports() {
        const fromDate = document.getElementById('report-from-date').value;
        const toDate = document.getElementById('report-to-date').value;
        renderReports(fromDate, toDate);
    }

    function renderReports(fromDate = '', toDate = '') {
        let inEntries = db.in.slice();
        let outEntries = db.out.slice();
        
        if(fromDate) {
            inEntries = inEntries.filter(x => x.date >= fromDate);
            outEntries = outEntries.filter(x => x.date >= fromDate);
        }
        if(toDate) {
            inEntries = inEntries.filter(x => x.date <= toDate);
            outEntries = outEntries.filter(x => x.date <= toDate);
        }
        
        // Populate STOCK IN table
        document.getElementById('report-in-body').innerHTML = inEntries.map(x => 
            `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty * x.rate).toFixed(2)}</td></tr>`
        ).join('');
        
        // Populate STOCK OUT table
        document.getElementById('report-out-body').innerHTML = outEntries.map(x => 
            `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty * x.rate).toFixed(2)}</td></tr>`
        ).join('');
    }

    function renderAll() {
        // Render Balance
        const items = [...new Set(db.in.map(x => x.item))];
        document.getElementById('bal-body').innerHTML = items.map(i => {
            const tin = db.in.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
            const tout = db.out.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
            const avail = tin - tout;
            const status = avail <= 5 ? '<span class="badge badge-danger">Low Stock</span>' : '<span class="badge badge-success">In Stock</span>';
            return `<tr><td>${i}</td><td>${tin}</td><td>${tout}</td><td>${avail}</td><td>${status}</td></tr>`;
        }).join('');

        // Render Stock In Log
        document.getElementById('in-body').innerHTML = db.in.slice().reverse().map((x, idx) => 
            `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td><td class="no-print"><button class="action-btn edit-btn" onclick="editEntry('in', ${db.in.length - 1 - idx})">Edit</button><button class="action-btn delete-btn" onclick="deleteEntry('in', ${db.in.length - 1 - idx})">Delete</button></td></tr>`
        ).join('');

        // Render Stock Out Log
        document.getElementById('out-body').innerHTML = db.out.slice().reverse().map((x, idx) => 
            `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td><td class="no-print"><button class="action-btn edit-btn" onclick="editEntry('out', ${db.out.length - 1 - idx})">Edit</button><button class="action-btn delete-btn" onclick="deleteEntry('out', ${db.out.length - 1 - idx})">Delete</button></td></tr>`
        ).join('');

        // Render Reports (default to all if no filter)
        renderReports();

        // Render PnL Filter Dropdown
        const pnlSelect = document.getElementById('pnl-filter');
        pnlSelect.innerHTML = '<option value="ALL">--- ALL PRODUCTS ---</option>' + items.map(i => `<option value="${i}">${i}</option>`).join('');

        // Render PnL Stats and Table
        const selectedProduct = pnlSelect.value;
        let filteredIn = selectedProduct === 'ALL' ? db.in : db.in.filter(x => x.item === selectedProduct);
        let filteredOut = selectedProduct === 'ALL' ? db.out : db.out.filter(x => x.item === selectedProduct);
        
        const totalCost = filteredIn.reduce((sum, x) => sum + (x.qty * x.rate), 0);
        const totalRevenue = filteredOut.reduce((sum, x) => sum + (x.qty * x.rate), 0);
        const netProfit = totalRevenue - totalCost;
        
        document.getElementById('total-cost-val').innerText = totalCost.toFixed(2);
        document.getElementById('total-rev-val').innerText = totalRevenue.toFixed(2);
        document.getElementById('net-profit-val').innerText = netProfit.toFixed(2);
        
        // PnL Table: Group by product, calculate avg cost, avg sale, qty sold, profit
        const productData = {};
        filteredIn.forEach(x => {
            if (!productData[x.item]) productData[x.item] = { costTotal: 0, costQty: 0, saleTotal: 0, saleQty: 0 };
            productData[x.item].costTotal += x.qty * x.rate;
            productData[x.item].costQty += x.qty;
        });
        filteredOut.forEach(x => {
            if (!productData[x.item]) productData[x.item] = { costTotal: 0, costQty: 0, saleTotal: 0, saleQty: 0 };
            productData[x.item].saleTotal += x.qty * x.rate;
            productData[x.item].saleQty += x.qty;
        });
        
        document.getElementById('pnl-body-table').innerHTML = Object.keys(productData).map(prod => {
            const data = productData[prod];
            const avgCost = data.costQty ? (data.costTotal / data.costQty).toFixed(2) : 0;
            const avgSale = data.saleQty ? (data.saleTotal / data.saleQty).toFixed(2) : 0;
            const profit = (data.saleTotal - data.costTotal).toFixed(2);
            return `<tr><td>${prod}</td><td>${avgCost}</td><td>${avgSale}</td><td>${data.saleQty}</td><td>${profit}</td></tr>`;
        }).join('');
    }

    window.onload = () => { 
        document.getElementById('in-date').valueAsDate = new Date(); 
        document.getElementById('out-date').valueAsDate = new Date(); 
    };


// --- DATABASE & INITIALIZATION ---
let db = JSON.parse(localStorage.getItem('krt_db')) || { in: [], out: [], users: [{u:'admin', p:'admin123', r:'admin'}] };
let editIndex = null;

// Number formatting function (Comma lagane ke liye)
function formatNum(num) {
    if (isNaN(num) || num === null) return "0.00";
    return parseFloat(num).toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function saveData() { 
    localStorage.setItem('krt_db', JSON.stringify(db)); 
    renderAll(); 
}

// --- AUTH LOGIC ---
function toggleAuth(type) {
    document.getElementById('login-box').style.display = type === 'login' ? 'block' : 'none';
    document.getElementById('reg-box').style.display = type === 'reg' ? 'block' : 'none';
}

document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    const user = db.users.find(x => x.u === u && x.p === p);
    if(user) {
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('main-app').classList.remove('hidden');
        document.getElementById('display-user').innerText = u;
        renderAll();
    } else { alert("Invalid Username/Password!"); }
};

// --- NAVIGATION ---
function showTab(id, el) {
    document.querySelectorAll('.module-card').forEach(m => m.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if(el) el.classList.add('active');
    renderAll();
}

// --- STOCK IN HANDLER ---
document.getElementById('in-form').onsubmit = function(e) {
    e.preventDefault();
    const entry = {
        date: document.getElementById('in-date').value,
        vendor: document.getElementById('in-vendor').value,
        item: document.getElementById('in-item').value.toUpperCase(),
        qty: parseFloat(document.getElementById('in-qty').value),
        rate: parseFloat(document.getElementById('in-rate').value || 0)
    };

    if(editIndex !== null) {
        db.in[editIndex] = entry;
        editIndex = null;
        document.querySelector('#in-form button').innerText = 'SAVE ENTRY';
    } else {
        db.in.push(entry);
    }
    saveData(); 
    e.target.reset();
    document.getElementById('in-date').valueAsDate = new Date();
};

// --- STOCK OUT HANDLER ---
document.getElementById('out-form').onsubmit = function(e) {
    e.preventDefault();
    const item = document.getElementById('out-item').value.toUpperCase();
    const qty = parseFloat(document.getElementById('out-qty').value);
    
    const tin = db.in.filter(x => x.item === item).reduce((s, c) => s + c.qty, 0);
    const tout = db.out.filter(x => x.item === item).reduce((s, c) => s + c.qty, 0);
    if((tin - tout) < qty) { alert("Insufficient Stock!"); return; }

    const entry = {
        date: document.getElementById('out-date').value,
        customer: document.getElementById('out-customer').value,
        item: item,
        qty: qty,
        rate: parseFloat(document.getElementById('out-rate').value || 0)
    };

    if(editIndex !== null) {
        db.out[editIndex] = entry;
        editIndex = null;
        document.querySelector('#out-form button').innerText = 'SAVE SALE';
    } else {
        db.out.push(entry);
    }
    saveData(); 
    e.target.reset();
    document.getElementById('out-date').valueAsDate = new Date();
};

// --- SEARCH & FILTER ---
function searchStock(val) {
    const res = document.getElementById('search-res');
    res.innerHTML = "";
    if(!val) return;
    const items = [...new Set(db.in.map(x => x.item))];
    items.filter(x => x.includes(val.toUpperCase())).forEach(i => {
        const d = document.createElement('div');
        d.innerText = i;
        d.onclick = () => { document.getElementById('out-item').value = i; res.innerHTML = ""; };
        res.appendChild(d);
    });
}

function filterReports() {
    const from = document.getElementById('report-from-date').value;
    const to = document.getElementById('report-to-date').value;
    renderReports(from, to);
}

// --- MASTER RENDER FUNCTIONS ---

function renderReports(fromDate = '', toDate = '') {
    const filterFn = (x) => (!fromDate || x.date >= fromDate) && (!toDate || x.date <= toDate);

    // Report Table 1: In
    document.getElementById('report-in-body').innerHTML = db.in.filter(filterFn).map(x => 
        `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${formatNum(x.rate)}</td><td>${formatNum(x.qty*x.rate)}</td></tr>`
    ).join('') || '<tr><td colspan="6">No Entries</td></tr>';

    // Report Table 2: Out
    document.getElementById('report-out-body').innerHTML = db.out.filter(filterFn).map(x => 
        `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${formatNum(x.rate)}</td><td>${formatNum(x.qty*x.rate)}</td></tr>`
    ).join('') || '<tr><td colspan="6">No Entries</td></tr>';
}

function renderAll() {
    const items = [...new Set(db.in.map(x => x.item))];

    // Stock Balance
    document.getElementById('bal-body').innerHTML = items.map(i => {
        const tin = db.in.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const tout = db.out.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const avail = tin - tout;
        const status = avail <= 5 ? '<span class="badge badge-danger">Low Stock</span>' : '<span class="badge badge-success">In Stock</span>';
        return `<tr><td>${i}</td><td>${tin}</td><td>${tout}</td><td>${avail}</td><td>${status}</td></tr>`;
    }).join('');

    // Stock In Logs
    document.getElementById('in-body').innerHTML = db.in.slice().reverse().map((x, idx) => 
        `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${formatNum(x.rate)}</td><td>${formatNum(x.qty*x.rate)}</td><td class="no-print">
            <button class="action-btn edit-btn" onclick="editEntry('in', ${db.in.length - 1 - idx})">Edit</button>
            <button class="action-btn delete-btn" onclick="deleteEntry('in', ${db.in.length - 1 - idx})">Delete</button>
        </td></tr>`
    ).join('');

    // Stock Out Logs
    document.getElementById('out-body').innerHTML = db.out.slice().reverse().map((x, idx) => 
        `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${formatNum(x.rate)}</td><td>${formatNum(x.qty*x.rate)}</td><td class="no-print">
            <button class="action-btn edit-btn" onclick="editEntry('out', ${db.out.length - 1 - idx})">Edit</button>
            <button class="action-btn delete-btn" onclick="deleteEntry('out', ${db.out.length - 1 - idx})">Delete</button>
        </td></tr>`
    ).join('');

    // P&L and Reports
    renderPNL(items);
    renderReports();
}

function renderPNL(items) {
    let tCost = 0, tRev = 0, rows = "";
    items.forEach(i => {
        const inEntries = db.in.filter(x => x.item === i);
        const inQty = inEntries.reduce((s,c) => s+c.qty,0);
        const avgCost = inQty > 0 ? (inEntries.reduce((s,c) => s+(c.qty*c.rate),0) / inQty) : 0;
        
        const outEntries = db.out.filter(x => x.item === i);
        const qSold = outEntries.reduce((s,c) => s+c.qty,0);
        const rev = outEntries.reduce((s,c) => s+(c.qty*c.rate),0);
        const profit = rev - (qSold * avgCost);
        
        tCost += (qSold * avgCost); tRev += rev;
        rows += `<tr><td>${i}</td><td>${formatNum(avgCost)}</td><td>${formatNum(qSold > 0 ? rev/qSold : 0)}</td><td>${qSold}</td><td style="color:${profit>=0?'green':'red'}">${formatNum(profit)}</td></tr>`;
    });
    document.getElementById('pnl-body-table').innerHTML = rows;
    document.getElementById('total-cost-val').innerText = formatNum(tCost);
    document.getElementById('total-rev-val').innerText = formatNum(tRev);
    document.getElementById('net-profit-val').innerText = formatNum(tRev - tCost);
}

function editEntry(type, index) {
    editIndex = index;
    const entry = db[type][index];
    if(type === 'in') {
        document.getElementById('in-date').value = entry.date;
        document.getElementById('in-vendor').value = entry.vendor;
        document.getElementById('in-item').value = entry.item;
        document.getElementById('in-qty').value = entry.qty;
        document.getElementById('in-rate').value = entry.rate;
        document.querySelector('#in-form button').innerText = 'UPDATE ENTRY';
        showTab('stockin');
    } else {
        document.getElementById('out-date').value = entry.date;
        document.getElementById('out-customer').value = entry.customer;
        document.getElementById('out-item').value = entry.item;
        document.getElementById('out-qty').value = entry.qty;
        document.getElementById('out-rate').value = entry.rate;
        document.querySelector('#out-form button').innerText = 'UPDATE SALE';
        showTab('stockout');
    }
}

function deleteEntry(type, index) {
    if(confirm('Delete this entry?')) {
        db[type].splice(index, 1);
        saveData();
    }
}

window.onload = () => { 
    document.getElementById('in-date').valueAsDate = new Date(); 
    document.getElementById('out-date').valueAsDate = new Date(); 
};
// --- DATABASE LOGIC ---
let db = JSON.parse(localStorage.getItem('krt_db')) || { in: [], out: [], users: [{u:'admin', p:'admin123', r:'admin'}] };
let editIndex = null;

// PROFESSIONAL COMMA FORMATTING FUNCTION
function formatPKR(num) {
    if (isNaN(num) || num === null) return "0.00";
    return parseFloat(num).toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function saveData() { 
    localStorage.setItem('krt_db', JSON.stringify(db)); 
    renderAll(); 
}

// --- RENDER ALL SECTIONS ---
function renderAll() {
    const items = [...new Set(db.in.map(x => x.item))];

    // 1. Stock Balance Table (With Comma)
    document.getElementById('bal-body').innerHTML = items.map(i => {
        const tin = db.in.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const tout = db.out.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const avail = tin - tout;
        const status = avail <= 5 ? '<span class="badge badge-danger">Low Stock</span>' : '<span class="badge badge-success">Available</span>';
        return `<tr><td><strong>${i}</strong></td><td>${formatPKR(tin)}</td><td>${formatPKR(tout)}</td><td>${formatPKR(avail)}</td><td>${status}</td></tr>`;
    }).join('');

    // 2. Stock In/Out Main Tables
    document.getElementById('in-body').innerHTML = db.in.slice().reverse().map((x, idx) => 
        `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${formatPKR(x.rate)}</td><td>${formatPKR(x.qty*x.rate)}</td><td class="no-print"><button class="action-btn delete-btn" onclick="deleteEntry('in', ${db.in.length-1-idx})">Delete</button></td></tr>`
    ).join('');

    document.getElementById('out-body').innerHTML = db.out.slice().reverse().map((x, idx) => 
        `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${formatPKR(x.rate)}</td><td>${formatPKR(x.qty*x.rate)}</td><td class="no-print"><button class="action-btn delete-btn" onclick="deleteEntry('out', ${db.out.length-1-idx})">Delete</button></td></tr>`
    ).join('');

    // 3. Profit & Loss Logic (With Filter)
    const pnlFilter = document.getElementById('pnl-filter');
    const selection = pnlFilter.value || "ALL";
    pnlFilter.innerHTML = `<option value="ALL">--- ALL PRODUCTS ---</option>` + items.map(i => `<option value="${i}" ${selection===i?'selected':''}>${i}</option>`).join('');

    let tCost = 0, tRev = 0, pnlRows = "";
    const filteredItems = selection === "ALL" ? items : items.filter(x => x === selection);

    filteredItems.forEach(i => {
        const inData = db.in.filter(x => x.item === i);
        const avgCost = (inData.reduce((s,c) => s+(c.qty*c.rate),0) / inData.reduce((s,c) => s+c.qty,0)) || 0;
        const outData = db.out.filter(x => x.item === i);
        const qSold = outData.reduce((s,c) => s+c.qty,0);
        const rev = outData.reduce((s,c) => s+(c.qty*c.rate),0);
        const profit = rev - (qSold * avgCost);
        tCost += (qSold * avgCost); tRev += rev;
        pnlRows += `<tr><td>${i}</td><td>${formatPKR(avgCost)}</td><td>${formatPKR(qSold > 0 ? rev/qSold : 0)}</td><td>${qSold}</td><td style="color:${profit>=0?'green':'red'}">${formatPKR(profit)}</td></tr>`;
    });
    
    document.getElementById('pnl-body-table').innerHTML = pnlRows;
    document.getElementById('total-cost-val').innerText = formatPKR(tCost);
    document.getElementById('total-rev-val').innerText = formatPKR(tRev);
    document.getElementById('net-profit-val').innerText = formatPKR(tRev - tCost);

    renderReports(); // Automatic Reports Update
}

// 4. Daily Reports Function (Dates Filter)
function renderReports(fromDate = '', toDate = '') {
    const filterFn = x => (!fromDate || x.date >= fromDate) && (!toDate || x.date <= toDate);
    
    document.getElementById('report-in-body').innerHTML = db.in.filter(filterFn).map(x => 
        `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${formatPKR(x.rate)}</td><td>${formatPKR(x.qty*x.rate)}</td></tr>`
    ).join('') || '<tr><td colspan="6" class="text-center">No Records</td></tr>';

    document.getElementById('report-out-body').innerHTML = db.out.filter(filterFn).map(x => 
        `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${formatPKR(x.rate)}</td><td>${formatPKR(x.qty*x.rate)}</td></tr>`
    ).join('') || '<tr><td colspan="6" class="text-center">No Records</td></tr>';
}

function deleteEntry(type, idx) {
    if(confirm("Confirm Delete?")) {
        db[type].splice(idx, 1);
        saveData();
    }
}
// Baaki login aur search logic same rahega...
// Is function ko apne script mein sabse upar rakh dein
function formatPKR(val) {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(val);
}

// Jab aap table mein rate ya total dikhayein, to aise likhein:
// <td>${formatPKR(x.rate)}</td>
// Numbers ko 1,200.00 format mein dikhane ke liye
function formatNumber(num) {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(num);
}
function renderAll() {
    const items = [...new Set(db.in.map(x => x.item))];
    let totalCost = 0, totalRev = 0, pnlRows = "";

    items.forEach(i => {
        const inData = db.in.filter(x => x.item === i);
        const avgCost = (inData.reduce((s,c) => s+(c.qty*c.rate), 0) / inData.reduce((s,c) => s+c.qty, 0)) || 0;
        
        const outData = db.out.filter(x => x.item === i);
        const qSold = outData.reduce((s,c) => s+c.qty, 0);
        const rev = outData.reduce((s,c) => s+(c.qty*c.rate), 0);
        const profit = rev - (qSold * avgCost);

        totalCost += (qSold * avgCost); 
        totalRev += rev;

        // Yahan formatCurrency use ho raha hai
        pnlRows += `<tr>
            <td>${i}</td>
            <td>${formatCurrency(avgCost)}</td>
            <td>${formatCurrency(rev/qSold || 0)}</td>
            <td>${qSold}</td>
            <td style="color:${profit >= 0 ? 'green' : 'red'}; font-weight:bold;">
                ${formatCurrency(profit)}
            </td>
        </tr>`;
    });

    document.getElementById('pnl-body-table').innerHTML = pnlRows;
    
    // Totals mein Comma lagana
    document.getElementById('total-cost-val').innerText = formatCurrency(totalCost);
    document.getElementById('total-rev-val').innerText = formatCurrency(totalRev);
    document.getElementById('net-profit-val').innerText = formatCurrency(totalRev - totalCost);
}
// 1. DATABASE INITIALIZATION (Sirf ek baar)
let db = JSON.parse(localStorage.getItem('krt_db')) || { 
    in: [], 
    out: [], 
    users: [{u:'admin', p:'admin123', r:'admin'}] 
};
let editIndex = null;

// 2. FORMATTER
const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(num || 0);
};

// 3. SAVE DATA
function saveData() { 
    localStorage.setItem('krt_db', JSON.stringify(db)); 
    renderAll(); 
}

// 4. MASTER RENDER ENGINE
function renderAll() {
    const items = [...new Set(db.in.map(x => x.item))];
    
    // --- STOCK BALANCE ---
    document.getElementById('bal-body').innerHTML = items.map(i => {
        const tin = db.in.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const tout = db.out.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const avail = tin - tout;
        const status = avail <= 5 ? '<span class="badge badge-danger">Low Stock</span>' : '<span class="badge badge-success">Available</span>';
        return `<tr><td><strong>${i}</strong></td><td>${tin}</td><td>${tout}</td><td>${avail}</td><td>${status}</td></tr>`;
    }).join('');

    // --- P&L CALCULATIONS ---
    let totalCostOfSoldGoods = 0;
    let totalRev = 0;
    let pnlRows = "";

    items.forEach(i => {
        const inEntries = db.in.filter(x => x.item === i);
        const totalInQty = inEntries.reduce((s, c) => s + c.qty, 0);
        const totalInVal = inEntries.reduce((s, c) => s + (c.qty * c.rate), 0);
        const avgCost = totalInQty > 0 ? (totalInVal / totalInQty) : 0;

        const outEntries = db.out.filter(x => x.item === i);
        const qSold = outEntries.reduce((s, c) => s + c.qty, 0);
        const rev = outEntries.reduce((s, c) => s + (c.qty * c.rate), 0);
        
        const costOfGoodsSold = qSold * avgCost;
        const profit = rev - costOfGoodsSold;

        totalCostOfSoldGoods += costOfGoodsSold;
        totalRev += rev;

        pnlRows += `<tr>
            <td>${i}</td>
            <td>${formatCurrency(avgCost)}</td>
            <td>${formatCurrency(qSold > 0 ? rev/qSold : 0)}</td>
            <td>${qSold}</td>
            <td style="color:${profit >= 0 ? 'green' : 'red'}; font-weight:bold;">${formatCurrency(profit)}</td>
        </tr>`;
    });

    document.getElementById('pnl-body-table').innerHTML = pnlRows;
    document.getElementById('total-cost-val').innerText = formatCurrency(totalCostOfSoldGoods);
    document.getElementById('total-rev-val').innerText = formatCurrency(totalRev);
    document.getElementById('net-profit-val').innerText = formatCurrency(totalRev - totalCostOfSoldGoods);

    // --- LOGS ---
    renderLogs();
}

// 5. DELETE FUNCTION
function deleteEntry(type, idx) {
    if(confirm("Delete this record?")) {
        db[type].splice(idx, 1);
        saveData();
    }
}

// 6. INITIAL LOAD
window.onload = () => { 
    if(document.getElementById('in-date')) document.getElementById('in-date').valueAsDate = new Date(); 
    if(document.getElementById('out-date')) document.getElementById('out-date').valueAsDate = new Date(); 
    renderAll();
};
// Ye function comma lagata hai
function formatPKR(num) {
    return new Intl.NumberFormat('en-US').format(num);
}

document.getElementById('total').innerText = formatPKR(15000);
// Result: 15,000 (JS ne comma laga kar HTML ko diya)

function comma(n){
  return Number(n).toLocaleString('en-IN');
}

<td>${comma(amount)}</td>
function fmt(n){
  return Number(n).toLocaleString('en-IN');
}
// --- DATABASE LOGIC ---
let db = JSON.parse(localStorage.getItem('krt_db')) || { in: [], out: [], users: [{u:'admin', p:'admin123', r:'admin'}] };
let editIndex = null; // For editing entries

function saveData() { localStorage.setItem('krt_db', JSON.stringify(db)); }

// --- AUTH LOGIC ---
function toggleAuth(type) {
    document.getElementById('login-box').style.display = type === 'login' ? 'block' : 'none';
    document.getElementById('reg-box').style.display = type === 'reg' ? 'block' : 'none';
}

document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    const user = db.users.find(x => x.u === u && x.p === p);
    if(user) {
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('main-app').classList.remove('hidden');
        document.getElementById('display-user').innerText = u;
        renderAll();
    } else { alert("Invalid Username/Password!"); }
};

document.getElementById('reg-form').onsubmit = function(e) {
    e.preventDefault();
    db.users.push({u: document.getElementById('reg-user').value, p: document.getElementById('reg-pass').value, r: document.getElementById('reg-role').value});
    saveData(); alert("User Created!"); toggleAuth('login');
};

// --- CORE FUNCTIONS ---
function showTab(id, el) {
    document.querySelectorAll('.module-card').forEach(m => m.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    el.classList.add('active');
    renderAll();
}

document.getElementById('in-form').onsubmit = function(e) {
    e.preventDefault();
    if(editIndex !== null) {
        db.in[editIndex] = {
            date: document.getElementById('in-date').value,
            vendor: document.getElementById('in-vendor').value,
            item: document.getElementById('in-item').value.toUpperCase(),
            qty: parseFloat(document.getElementById('in-qty').value),
            rate: parseFloat(document.getElementById('in-rate').value || 0)
        };
        editIndex = null;
        document.querySelector('#in-form button').innerText = 'SAVE ENTRY';
    } else {
        db.in.push({
            date: document.getElementById('in-date').value,
            vendor: document.getElementById('in-vendor').value,
            item: document.getElementById('in-item').value.toUpperCase(),
            qty: parseFloat(document.getElementById('in-qty').value),
            rate: parseFloat(document.getElementById('in-rate').value || 0)
        });
    }
    saveData(); renderAll(); e.target.reset();
};

document.getElementById('out-form').onsubmit = function(e) {
    e.preventDefault();
    const item = document.getElementById('out-item').value.toUpperCase();
    const qty = parseFloat(document.getElementById('out-qty').value);
    
    // Stock Check
    const totalIn = db.in.filter(x => x.item === item).reduce((s, c) => s + c.qty, 0);
    const totalOut = db.out.filter(x => x.item === item).reduce((s, c) => s + c.qty, 0);
    if((totalIn - totalOut) < qty) { alert("Insufficient Stock!"); return; }

    if(editIndex !== null) {
        db.out[editIndex] = {
            date: document.getElementById('out-date').value,
            customer: document.getElementById('out-customer').value,
            item: item,
            qty: qty,
            rate: parseFloat(document.getElementById('out-rate').value || 0)
        };
        editIndex = null;
        document.querySelector('#out-form button').innerText = 'SAVE SALE';
    } else {
        db.out.push({
            date: document.getElementById('out-date').value,
            customer: document.getElementById('out-customer').value,
            item: item,
            qty: qty,
            rate: parseFloat(document.getElementById('out-rate').value || 0)
        });
    }
    saveData(); renderAll(); e.target.reset();
};

function searchStock(val) {
    const res = document.getElementById('search-res');
    res.innerHTML = "";
    if(!val) return;
    const items = [...new Set(db.in.map(x => x.item))];
    items.filter(x => x.includes(val.toUpperCase())).forEach(i => {
        const d = document.createElement('div');
        d.innerText = i;
        d.onclick = () => { document.getElementById('out-item').value = i; res.innerHTML = ""; };
        res.appendChild(d);
    });
}

function editEntry(type, index) {
    editIndex = index;
    const entry = db[type][index];
    if(type === 'in') {
        document.getElementById('in-date').value = entry.date;
        document.getElementById('in-vendor').value = entry.vendor;
        document.getElementById('in-item').value = entry.item;
        document.getElementById('in-qty').value = entry.qty;
        document.getElementById('in-rate').value = entry.rate;
        document.querySelector('#in-form button').innerText = 'UPDATE ENTRY';
        showTab('stockin', document.querySelector('.nav-item[onclick*="stockin"]'));
    } else {
        document.getElementById('out-date').value = entry.date;
        document.getElementById('out-customer').value = entry.customer;
        document.getElementById('out-item').value = entry.item;
        document.getElementById('out-qty').value = entry.qty;
        document.querySelector('#out-form button').innerText = 'UPDATE SALE';
        showTab('stockout', document.querySelector('.nav-item[onclick*="stockout"]'));
    }
}

function deleteEntry(type, index) {
    if(confirm('Are you sure you want to delete this entry?')) {
        db[type].splice(index, 1);
        saveData();
        renderAll();
    }
}

function filterReports() {
    const fromDate = document.getElementById('report-from-date').value;
    const toDate = document.getElementById('report-to-date').value;
    renderReports(fromDate, toDate);
}

function renderReports(fromDate = '', toDate = '') {
    let inEntries = db.in.slice();
    let outEntries = db.out.slice();
    
    if(fromDate) {
        inEntries = inEntries.filter(x => x.date >= fromDate);
        outEntries = outEntries.filter(x => x.date >= fromDate);
    }
    if(toDate) {
        inEntries = inEntries.filter(x => x.date <= toDate);
        outEntries = outEntries.filter(x => x.date <= toDate);
    }
    
    // Professional Date Format Function
    function formatDate(dateStr) {
        const d = new Date(dateStr);
        return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
    }
    
    // Amount Formatting Function with Comma
    function formatAmount(amount) {
        return '₹' + parseFloat(amount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    
    // Populate STOCK IN table with formatted date and amount
    document.getElementById('report-in-body').innerHTML = inEntries.map(x => 
        `<tr><td>${formatDate(x.date)}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${formatAmount(x.qty * x.rate)}</td></tr>`
    ).join('');
    
    // Populate STOCK OUT table with formatted date and amount
    document.getElementById('report-out-body').innerHTML = outEntries.map(x => 
        `<tr><td>${formatDate(x.date)}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${formatAmount(x.qty * x.rate)}</td></tr>`
    ).join('');
    
    // Render Bar Chart
    renderChart(inEntries, outEntries);
}

function renderChart(inEntries, outEntries) {
    const ctx = document.getElementById('stockChart').getContext('2d');
    
    // Group by date for chart
    const dateMap = {};
    inEntries.forEach(x => {
        if (!dateMap[x.date]) dateMap[x.date] = { in: 0, out: 0 };
        dateMap[x.date].in += x.qty * x.rate;
    });
    outEntries.forEach(x => {
        if (!dateMap[x.date]) dateMap[x.date] = { in: 0, out: 0 };
        dateMap[x.date].out += x.qty * x.rate;
    });
    
    const labels = Object.keys(dateMap).sort();
    const inData = labels.map(d => dateMap[d].in);
    const outData = labels.map(d => dateMap[d].out);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels.map(d => {
                const date = new Date(d);
                return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            }),
            datasets: [{
                label: 'Stock IN (Amount ₹)',
                data: inData,
                backgroundColor: 'rgba(34, 197, 94, 0.7)',
                borderColor: 'rgba(34, 197, 94, 1)',
                borderWidth: 1
            }, {
                label: 'Stock OUT (Amount ₹)',
                data: outData,
                backgroundColor: 'rgba(239, 68, 68, 0.7)',
                borderColor: 'rgba(239, 68, 68, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

function renderAll() {
    // Render Balance
    const items = [...new Set(db.in.map(x => x.item))];
    document.getElementById('bal-body').innerHTML = items.map(i => {
        const tin = db.in.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const tout = db.out.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const avail = tin - tout;
        const status = avail <= 5 ? '<span class="badge badge-danger">Low Stock</span>' : '<span class="badge badge-success">In Stock</span>';
        return `<tr><td>${i}</td><td>${tin}</td><td>${tout}</td><td>${avail}</td><td>${status}</td></tr>`;
    }).join('');

    // Render Stock In Log
    document.getElementById('in-body').innerHTML = db.in.slice().reverse().map((x, idx) => 
        `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td><td class="no-print"><button class="action-btn edit-btn" onclick="editEntry('in', ${db.in.length - 1 - idx})">Edit</button><button class="action-btn delete-btn" onclick="deleteEntry('in', ${db.in.length - 1 - idx})">Delete</button></td></tr>`
    ).join('');

    // Render Stock Out Log
    document.getElementById('out-body').innerHTML = db.out.slice().reverse().map((x, idx) => 
        `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td><td class="no-print"><button class="action-btn edit-btn" onclick="editEntry('out', ${db.out.length - 1 - idx})">Edit</button><button class="action-btn delete-btn" onclick="deleteEntry('out', ${db.out.length - 1 - idx})">Delete</button></td></tr>`
    ).join('');

    // Render Reports (default to all if no filter)
    renderReports();

    // Render PnL Filter Dropdown
    const pnlSelect = document.getElementById('pnl-filter');
    pnlSelect.innerHTML = '<option value="ALL">--- ALL PRODUCTS ---</option>' + items.map(i => `<option value="${i}">${i}</option>`).join('');

    // Render PnL Stats and Table
    const selectedProduct = pnlSelect.value;
    let filteredIn = selectedProduct === 'ALL' ? db.in : db.in.filter(x => x.item === selectedProduct);
    let filteredOut = selectedProduct === 'ALL' ? db.out : db.out.filter(x => x.item === selectedProduct);
    
    const totalCost = filteredIn.reduce((sum, x) => sum + (x.qty * x.rate), 0);
    const totalRevenue = filteredOut.reduce((sum, x) => sum + (x.qty * x.rate), 0);
    const netProfit = totalRevenue - totalCost;
    
    // Amount Formatting Function with Comma
    function formatAmount(amount) {
        return '₹' + parseFloat(amount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    
    document.getElementById('total-cost-val').innerText = formatAmount(totalCost);
    document.getElementById('total-rev-val').innerText = formatAmount(totalRevenue);
    document.getElementById('net-profit-val').innerText = formatAmount(netProfit);
    
    // PnL Table: Group by product, calculate avg cost, avg sale, qty sold, profit
    const productData = {};
    filteredIn.forEach(x => {
        if (!productData[x.item]) productData[x.item] = { costTotal: 0, costQty: 0, saleTotal: 0, saleQty: 0 };
        productData[x.item].costTotal += x.qty * x.rate;
        productData[x.item].costQty += x.qty;
    });
    filteredOut.forEach(x => {
        if (!productData[x.item]) productData[x.item] = { costTotal: 0, costQty: 0, saleTotal: 0, saleQty: 0 };
        productData[x.item].saleTotal += x.qty * x.rate;
        productData[x.item].saleQty += x.qty;
    });
    
    document.getElementById('pnl-body-table').innerHTML = Object.keys(productData).map(prod => {
        const data = productData[prod];
        const avgCost = data.costQty ? (data.costTotal / data.costQty).toFixed(2) : 0;
        const avgSale = data.saleQty ? (data.saleTotal / data.saleQty).toFixed(2) : 0;
        const profit = (data.saleTotal - data.costTotal).toFixed(2);
        return `<tr><td>${prod}</td><td>${formatAmount(avgCost)}</td><td>${formatAmount(avgSale)}</td><td>${data.saleQty}</td><td>${formatAmount(profit)}</td></tr>`;
    }).join('');
}

window.onload = () => { 
    document.getElementById('in-date').valueAsDate = new Date(); 
    document.getElementById('out-date').valueAsDate = new Date(); 
};
// Function jo comma lagata hai (1,00,000 format)
function fmt(n) {
    return Number(n).toLocaleString('en-IN', { minimumFractionDigits: 2 });
}

function filterReports() {
    const fromDate = document.getElementById('report-from-date').value;
    const toDate = document.getElementById('report-to-date').value;
    const searchName = document.getElementById('report-search-name').value.trim().toUpperCase();

    // Tables ko refresh karne ke liye function ko call karein
    renderReports(fromDate, toDate, searchName);
}

function renderReports(fromDate = '', toDate = '', searchName = '') {
    // 1. Agar login ke waqt ya page load par sab khali hai, toh data na dikhao
    if (!fromDate && !toDate && !searchName) {
        const placeholder = '<tr><td colspan="6" style="text-align:center; padding:20px; color:gray;">Search name or select date to view report</td></tr>';
        document.getElementById('report-in-body').innerHTML = placeholder;
        document.getElementById('report-out-body').innerHTML = placeholder;
        return;
    }

    // 2. Filter Logic (Strict AND condition)
    const applyFilters = (x) => {
        const matchDate = (!fromDate || x.date >= fromDate) && (!toDate || x.date <= toDate);
        const namePool = `${x.item} ${x.vendor || ''} ${x.customer || ''}`.toUpperCase();
        const matchName = !searchName || namePool.includes(searchName);
        return matchDate && matchName;
    };

    const inEntries = db.in.filter(applyFilters);
    const outEntries = db.out.filter(applyFilters);

    // 3. STOCK IN Table Update
    document.getElementById('report-in-body').innerHTML = inEntries.length ? inEntries.map(x => 
        `<tr>
            <td>${x.date}</td>
            <td>${x.vendor}</td>
            <td>${x.item}</td>
            <td>${x.qty}</td>
            <td>${fmt(x.rate)}</td>
            <td>${fmt(x.qty * x.rate)}</td>
        </tr>`
    ).join('') : '<tr><td colspan="6" class="text-center">No matching records</td></tr>';

    // 4. STOCK OUT Table Update
    document.getElementById('report-out-body').innerHTML = outEntries.length ? outEntries.map(x => 
        `<tr>
            <td>${x.date}</td>
            <td>${x.customer}</td>
            <td>${x.item}</td>
            <td>${x.qty}</td>
            <td>${fmt(x.rate)}</td>
            <td>${fmt(x.qty * x.rate)}</td>
        </tr>`
    ).join('') : '<tr><td colspan="6" class="text-center">No matching records</td></tr>';
}

// RenderAll function ko bhi update karein takay wo report ko kharab na kare
function renderAll() {
    // Balance Table
    const items = [...new Set(db.in.map(x => x.item))];
    document.getElementById('bal-body').innerHTML = items.map(i => {
        const tin = db.in.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const tout = db.out.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const avail = tin - tout;
        const status = avail <= 5 ? '<span class="badge badge-danger">Low Stock</span>' : '<span class="badge badge-success">In Stock</span>';
        return `<tr><td>${i}</td><td>${tin}</td><td>${tout}</td><td>${avail}</td><td>${status}</td></tr>`;
    }).join('');

    // Stock In/Out Logs (Logs hamesha dikhte rahenge)
    document.getElementById('in-body').innerHTML = db.in.slice().reverse().map((x, idx) => 
        `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${fmt(x.rate)}</td><td>${fmt(x.qty*x.rate)}</td><td class="no-print"><button class="action-btn edit-btn" onclick="editEntry('in', ${db.in.length - 1 - idx})">Edit</button></td></tr>`
    ).join('');

    document.getElementById('out-body').innerHTML = db.out.slice().reverse().map((x, idx) => 
        `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${fmt(x.rate)}</td><td>${fmt(x.qty*x.rate)}</td><td class="no-print"><button class="action-btn edit-btn" onclick="editEntry('out', ${db.out.length - 1 - idx})">Edit</button></td></tr>`
    ).join('');

    // Reports ko load par khali rakhne ke liye sirf values pass karein
    const rFrom = document.getElementById('report-from-date').value;
    const rTo = document.getElementById('report-to-date').value;
    const rName = document.getElementById('report-search-name').value;
    renderReports(rFrom, rTo, rName);
}
function renderAll() {
    // 1. Aaj ki date nikalna (YYYY-MM-DD format mein)
    const today = new Date().toISOString().split('T')[0];

    // 2. Current Stock Status (Ye hamesha total hi dikhayega takay balance sahi pata chale)
    const items = [...new Set(db.in.map(x => x.item))];
    document.getElementById('bal-body').innerHTML = items.map(i => {
        const tin = db.in.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const tout = db.out.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const avail = tin - tout;
        const status = avail <= 5 ? '<span class="badge badge-danger">Low Stock</span>' : '<span class="badge badge-success">In Stock</span>';
        return `<tr><td>${i}</td><td>${tin}</td><td>${tout}</td><td>${avail}</td><td>${status}</td></tr>`;
    }).join('');

    // 3. Stock IN Log - SIRF AAJ KI ENTRIES
    const todayIn = db.in.filter(x => x.date === today);
    document.getElementById('in-body').innerHTML = todayIn.length > 0 
        ? todayIn.slice().reverse().map((x, idx) => 
            `<tr>
                <td>${x.date}</td>
                <td>${x.vendor}</td>
                <td>${x.item}</td>
                <td>${x.qty}</td>
                <td>${x.rate}</td>
                <td>${(x.qty*x.rate).toFixed(2)}</td>
                <td class="no-print">
                    <button class="action-btn delete-btn" onclick="deleteEntry('in', ${db.in.indexOf(x)})">Delete</button>
                </td>
            </tr>`
        ).join('')
        : '<tr><td colspan="7" class="text-center">No entries for today</td></tr>';

    // 4. Stock OUT Log - SIRF AAJ KI ENTRIES
    const todayOut = db.out.filter(x => x.date === today);
    document.getElementById('report-out-body'); // Dummy call to avoid error
    document.getElementById('out-body').innerHTML = todayOut.length > 0
        ? todayOut.slice().reverse().map((x, idx) => 
            `<tr>
                <td>${x.date}</td>
                <td>${x.customer}</td>
                <td>${x.item}</td>
                <td>${x.qty}</td>
                <td>${x.rate}</td>
                <td>${(x.qty*x.rate).toFixed(2)}</td>
                <td class="no-print">
                    <button class="action-btn delete-btn" onclick="deleteEntry('out', ${db.out.indexOf(x)})">Delete</button>
                </td>
            </tr>`
        ).join('')
        : '<tr><td colspan="7" class="text-center">No sales for today</td></tr>';

    // 5. Baqi sections ko refresh karna
    renderReports(); // Ye filter ke mutabiq chalega
    updatePnL();     // Agar PnL function hai to
}

    // --- DATABASE LOGIC ---
    let db = JSON.parse(localStorage.getItem('krt_db')) || { in: [], out: [], users: [{u:'admin', p:'admin123', r:'admin'}] };
    let editIndex = null;

    function saveData() { localStorage.setItem('krt_db', JSON.stringify(db)); }

    // --- AUTH LOGIC ---
    function toggleAuth(type) {
        document.getElementById('login-box').style.display = type === 'login' ? 'block' : 'none';
        document.getElementById('reg-box').style.display = type === 'reg' ? 'block' : 'none';
    }

    document.getElementById('login-form').onsubmit = function(e) {
        e.preventDefault();
        const u = document.getElementById('username').value;
        const p = document.getElementById('password').value;
        const user = db.users.find(x => x.u === u && x.p === p);
        if(user) {
            document.getElementById('login-overlay').style.display = 'none';
            document.getElementById('main-app').classList.remove('hidden');
            document.getElementById('display-user').innerText = u;
            renderAll(); // Dashboard aur Logs dikhaye ga
        } else { alert("Invalid Username/Password!"); }
    };

    document.getElementById('reg-form').onsubmit = function(e) {
        e.preventDefault();
        db.users.push({u: document.getElementById('reg-user').value, p: document.getElementById('reg-pass').value, r: document.getElementById('reg-role').value});
        saveData(); alert("User Created!"); toggleAuth('login');
    };

    // --- CORE FUNCTIONS ---
    function showTab(id, el) {
        document.querySelectorAll('.module-card').forEach(m => m.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        el.classList.add('active');
        
        // IMPORTANT: Tab change par reports ko auto-load nahi hone dena jab tak filter na ho
        if(id !== 'reports') renderAll();
    }

    // --- SAVE & DELETE LOGIC (Common) ---
    document.getElementById('in-form').onsubmit = function(e) {
        e.preventDefault();
        const entry = {
            date: document.getElementById('in-date').value,
            vendor: document.getElementById('in-vendor').value,
            item: document.getElementById('in-item').value.toUpperCase(),
            qty: parseFloat(document.getElementById('in-qty').value),
            rate: parseFloat(document.getElementById('in-rate').value || 0)
        };
        if(editIndex !== null) { db.in[editIndex] = entry; editIndex = null; document.querySelector('#in-form button').innerText = 'SAVE ENTRY'; }
        else { db.in.push(entry); }
        saveData(); renderAll(); e.target.reset();
    };

    document.getElementById('out-form').onsubmit = function(e) {
        e.preventDefault();
        const item = document.getElementById('out-item').value.toUpperCase();
        const qty = parseFloat(document.getElementById('out-qty').value);
        const totalIn = db.in.filter(x => x.item === item).reduce((s, c) => s + c.qty, 0);
        const totalOut = db.out.filter(x => x.item === item).reduce((s, c) => s + c.qty, 0);
        if((totalIn - totalOut) < qty) { alert("Insufficient Stock!"); return; }

        const entry = {
            date: document.getElementById('out-date').value,
            customer: document.getElementById('out-customer').value,
            item: item,
            qty: qty,
            rate: parseFloat(document.getElementById('out-rate').value || 0)
        };
        if(editIndex !== null) { db.out[editIndex] = entry; editIndex = null; document.querySelector('#out-form button').innerText = 'SAVE SALE'; }
        else { db.out.push(entry); }
        saveData(); renderAll(); e.target.reset();
    };

    function deleteEntry(type, index) {
        if(confirm('Delete this entry?')) { db[type].splice(index, 1); saveData(); renderAll(); }
    }

    // --- REPORT LOGIC (THE FIX) ---
    function filterReports() {
        const from = document.getElementById('report-from-date').value;
        const to = document.getElementById('report-to-date').value;
        const name = document.getElementById('report-search-name').value.trim().toUpperCase();
        renderReports(from, to, name);
    }

    function renderReports(fromDate = '', toDate = '', searchName = '') {
        const inBody = document.getElementById('report-in-body');
        const outBody = document.getElementById('report-out-body');

        // Agar kuch search nahi kiya to table khali rakho
        if(!fromDate && !toDate && !searchName) {
            const msg = '<tr><td colspan="6" class="text-center">Please use filters to see data</td></tr>';
            inBody.innerHTML = msg; outBody.innerHTML = msg;
            return;
        }

        const applyFilter = (x) => {
            const matchDate = (!fromDate || x.date >= fromDate) && (!toDate || x.date <= toDate);
            const namePool = `${x.item} ${x.vendor || ''} ${x.customer || ''}`.toUpperCase();
            const matchName = !searchName || namePool.includes(searchName);
            return matchDate && matchName;
        };

        const fIn = db.in.filter(applyFilter);
        const fOut = db.out.filter(applyFilter);

        inBody.innerHTML = fIn.map(x => `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td></tr>`).join('');
        outBody.innerHTML = fOut.map(x => `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td></tr>`).join('');
    }

    function renderAll() {
        // Current Stock Status
        const items = [...new Set(db.in.map(x => x.item))];
        document.getElementById('bal-body').innerHTML = items.map(i => {
            const tin = db.in.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
            const tout = db.out.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
            const avail = tin - tout;
            return `<tr><td>${i}</td><td>${tin}</td><td>${tout}</td><td>${avail}</td><td>${avail <= 5 ? 'Low' : 'OK'}</td></tr>`;
        }).join('');

        // Stock IN/OUT Logs
        document.getElementById('in-body').innerHTML = db.in.slice().reverse().map((x, i) => `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td><td><button onclick="deleteEntry('in', ${db.in.length-1-i})">Del</button></td></tr>`).join('');
        document.getElementById('out-body').innerHTML = db.out.slice().reverse().map((x, i) => `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td><td><button onclick="deleteEntry('out', ${db.out.length-1-i})">Del</button></td></tr>`).join('');

        // IMPORTANT: Yahan renderReports() ko bina filter ke call nahi karna!
        // Sirf wahi dikhao jo filter box mein likha hai
        filterReports();
    }

    window.onload = () => { 
        document.getElementById('in-date').valueAsDate = new Date(); 
        document.getElementById('out-date').valueAsDate = new Date(); 
    };

// Login form ka event listener
document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault(); // Page ko reload hone se rokta hai

    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;

    // Database mein user ko dhoondna
    const user = db.users.find(x => x.u === u && x.p === p);

    if(user) {
        // Agar mil jaye to login box chupao aur app dikhao
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('main-app').classList.remove('hidden');
        document.getElementById('display-user').innerText = u;
        
        renderAll(); // Dashboard ka data load karo
    } else {
        alert("Ghalat Username ya Password! Dobara koshish karein.");
    }
};
>
    document.getElementById('in-form').onsubmit = function(e) {
        e.preventDefault();
        if(editIndex !== null) {
            db.in[editIndex] = {
                date: document.getElementById('in-date').value,
                vendor: document.getElementById('in-vendor').value,
                item: document.getElementById('in-item').value.toUpperCase(),
                qty: parseFloat(document.getElementById('in-qty').value),
                rate: parseFloat(document.getElementById('in-rate').value || 0)
            };
            editIndex = null;
            document.querySelector('#in-form button').innerText = 'SAVE ENTRY';
        } else {
            db.in.push({
                date: document.getElementById('in-date').value,
                vendor: document.getElementById('in-vendor').value,
                item: document.getElementById('in-item').value.toUpperCase(),
                qty: parseFloat(document.getElementById('in-qty').value),
                rate: parseFloat(document.getElementById('in-rate').value || 0)
            });
        }
        saveData(); renderAll(); e.target.reset();
    };

    document.getElementById('out-form').onsubmit = function(e) {
        e.preventDefault();
        const item = document.getElementById('out-item').value.toUpperCase();
        const qty = parseFloat(document.getElementById('out-qty').value);
        
        // Stock Check
        const totalIn = db.in.filter(x => x.item === item).reduce((s, c) => s + c.qty, 0);
        const totalOut = db.out.filter(x => x.item === item).reduce((s, c) => s + c.qty, 0);
        if((totalIn - totalOut) < qty) { alert("Insufficient Stock!"); return; }

        if(editIndex !== null) {
            db.out[editIndex] = {
                date: document.getElementById('out-date').value,
                customer: document.getElementById('out-customer').value,
                item: item,
                qty: qty,
                rate: parseFloat(document.getElementById('out-rate').value || 0)
            };
            editIndex = null;
            document.querySelector('#out-form button').innerText = 'SAVE SALE';
        } else {
            db.out.push({
                date: document.getElementById('out-date').value,
                customer: document.getElementById('out-customer').value,
                item: item,
                qty: qty,
                rate: parseFloat(document.getElementById('out-rate').value || 0)
            });
        }
        saveData(); renderAll(); e.target.reset();
    };

    function searchStock(val) {
        const res = document.getElementById('search-res');
        res.innerHTML = "";
        if(!val) return;
        const items = [...new Set(db.in.map(x => x.item))];
        items.filter(x => x.includes(val.toUpperCase())).forEach(i => {
            const d = document.createElement('div');
            d.innerText = i;
            d.onclick = () => { document.getElementById('out-item').value = i; res.innerHTML = ""; };
            res.appendChild(d);
        });
    }

    function editEntry(type, index) {
        editIndex = index;
        const entry = db[type][index];
        if(type === 'in') {
            document.getElementById('in-date').value = entry.date;
            document.getElementById('in-vendor').value = entry.vendor;
            document.getElementById('in-item').value = entry.item;
            document.getElementById('in-qty').value = entry.qty;
            document.getElementById('in-rate').value = entry.rate;
            document.querySelector('#in-form button').innerText = 'UPDATE ENTRY';
            showTab('stockin', document.querySelector('.nav-item[onclick*="stockin"]'));
        } else {
            document.getElementById('out-date').value = entry.date;
            document.getElementById('out-customer').value = entry.customer;
            document.getElementById('out-item').value = entry.item;
            document.getElementById('out-qty').value = entry.qty;
            document.getElementById('out-rate').value = entry.rate;
            document.querySelector('#out-form button').innerText = 'UPDATE SALE';
            showTab('stockout', document.querySelector('.nav-item[onclick*="stockout"]'));
        }
    }

    function deleteEntry(type, index) {
        if(confirm('Are you sure you want to delete this entry?')) {
            db[type].splice(index, 1);
            saveData();
            renderAll();
        }
    }

    function filterReports() {
        const fromDate = document.getElementById('report-from-date').value;
        const toDate = document.getElementById('report-to-date').value;
        renderReports(fromDate, toDate);
    }

    function renderReports(fromDate = '', toDate = '') {
        let inEntries = db.in.slice();
        let outEntries = db.out.slice();
        
        if(fromDate) {
            inEntries = inEntries.filter(x => x.date >= fromDate);
            outEntries = outEntries.filter(x => x.date >= fromDate);
        }
        if(toDate) {
            inEntries = inEntries.filter(x => x.date <= toDate);
            outEntries = outEntries.filter(x => x.date <= toDate);
        }
        
        // Populate STOCK IN table
        document.getElementById('report-in-body').innerHTML = inEntries.map(x => 
            `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty * x.rate).toFixed(2)}</td></tr>`
        ).join('');
        
        // Populate STOCK OUT table
        document.getElementById('report-out-body').innerHTML = outEntries.map(x => 
            `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty * x.rate).toFixed(2)}</td></tr>`
        ).join('');
    }

    function renderAll() {
        // Render Balance
        const items = [...new Set(db.in.map(x => x.item))];
        document.getElementById('bal-body').innerHTML = items.map(i => {
            const tin = db.in.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
            const tout = db.out.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
            const avail = tin - tout;
            const status = avail <= 5 ? '<span class="badge badge-danger">Low Stock</span>' : '<span class="badge badge-success">In Stock</span>';
            return `<tr><td>${i}</td><td>${tin}</td><td>${tout}</td><td>${avail}</td><td>${status}</td></tr>`;
        }).join('');

        // Render Stock In Log
        document.getElementById('in-body').innerHTML = db.in.slice().reverse().map((x, idx) => 
            `<tr><td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td><td class="no-print"><button class="action-btn edit-btn" onclick="editEntry('in', ${db.in.length - 1 - idx})">Edit</button><button class="action-btn delete-btn" onclick="deleteEntry('in', ${db.in.length - 1 - idx})">Delete</button></td></tr>`
        ).join('');

        // Render Stock Out Log
        document.getElementById('out-body').innerHTML = db.out.slice().reverse().map((x, idx) => 
            `<tr><td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td><td>${x.rate}</td><td>${(x.qty*x.rate).toFixed(2)}</td><td class="no-print"><button class="action-btn edit-btn" onclick="editEntry('out', ${db.out.length - 1 - idx})">Edit</button><button class="action-btn delete-btn" onclick="deleteEntry('out', ${db.out.length - 1 - idx})">Delete</button></td></tr>`
        ).join('');

        // Render Reports (default to all if no filter)
        renderReports();

        // Render PnL Filter Dropdown
        const pnlSelect = document.getElementById('pnl-filter');
        pnlSelect.innerHTML = '<option value="ALL">--- ALL PRODUCTS ---</option>' + items.map(i => `<option value="${i}">${i}</option>`).join('');

        // Render PnL Stats and Table
        const selectedProduct = pnlSelect.value;
        let filteredIn = selectedProduct === 'ALL' ? db.in : db.in.filter(x => x.item === selectedProduct);
        let filteredOut = selectedProduct === 'ALL' ? db.out : db.out.filter(x => x.item === selectedProduct);
        
        const totalCost = filteredIn.reduce((sum, x) => sum + (x.qty * x.rate), 0);
        const totalRevenue = filteredOut.reduce((sum, x) => sum + (x.qty * x.rate), 0);
        const netProfit = totalRevenue - totalCost;
        
        document.getElementById('total-cost-val').innerText = totalCost.toFixed(2);
        document.getElementById('total-rev-val').innerText = totalRevenue.toFixed(2);
        document.getElementById('net-profit-val').innerText = netProfit.toFixed(2);
        
        // PnL Table: Group by product, calculate avg cost, avg sale, qty sold, profit
        const productData = {};
        filteredIn.forEach(x => {
            if (!productData[x.item]) productData[x.item] = { costTotal: 0, costQty: 0, saleTotal: 0, saleQty: 0 };
            productData[x.item].costTotal += x.qty * x.rate;
            productData[x.item].costQty += x.qty;
        });
        filteredOut.forEach(x => {
            if (!productData[x.item]) productData[x.item] = { costTotal: 0, costQty: 0, saleTotal: 0, saleQty: 0 };
            productData[x.item].saleTotal += x.qty * x.rate;
            productData[x.item].saleQty += x.qty;
        });
        
        document.getElementById('pnl-body-table').innerHTML = Object.keys(productData).map(prod => {
            const data = productData[prod];
            const avgCost = data.costQty ? (data.costTotal / data.costQty).toFixed(2) : 0;
            const avgSale = data.saleQty ? (data.saleTotal / data.saleQty).toFixed(2) : 0;
            const profit = (data.saleTotal - data.costTotal).toFixed(2);
            return `<tr><td>${prod}</td><td>${avgCost}</td><td>${avgSale}</td><td>${data.saleQty}</td><td>${profit}</td></tr>`;
        }).join('');
    }

    window.onload = () => { 
        document.getElementById('in-date').valueAsDate = new Date(); 
        document.getElementById('out-date').valueAsDate = new Date(); 
    };
    function renderAll() {
    const today = new Date().toISOString().split('T')[0];

    // --- Stock Balance Table with Better Design ---
    const items = [...new Set(db.in.map(x => x.item))];
    document.getElementById('bal-body').innerHTML = items.map(i => {
        const tin = db.in.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const tout = db.out.filter(x => x.item === i).reduce((s, c) => s + c.qty, 0);
        const avail = tin - tout;
        
        // Dynamic Badge Color
        let statusBadge = avail <= 5 
            ? `<span class="badge badge-low">Low Stock: ${avail}</span>` 
            : `<span class="badge badge-ok">In Stock: ${avail}</span>`;

        return `
            <tr class="stock-row">
                <td class="font-bold">${i}</td>
                <td class="text-in">${tin}</td>
                <td class="text-out">${tout}</td>
                <td>${statusBadge}</td>
                <td class="no-print">
                    <button class="view-btn" onclick="showTab('reports', document.querySelector('.nav-item:last-child'))">View History</button>
                </td>
            </tr>`;
    }).join('');

    // ... (Baqi Stock In/Out ka purana code yahan rahega) ...
}
const outItemInput = document.getElementById('out-item');
const outItemList  = document.getElementById('out-item-list');

outItemInput.addEventListener('input', function () {
    const val = this.value.toUpperCase();
    outItemList.innerHTML = '';
    if (!val) {
        outItemList.style.display = 'none';
        return;
    }

    // Sirf Stock IN wale unique items
    const items = [...new Set(db.in.map(x => x.item))];

    const filtered = items.filter(i => i.includes(val));

    filtered.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        div.onclick = () => {
            outItemInput.value = item;
            outItemList.style.display = 'none';
        };
        outItemList.appendChild(div);
    });

    outItemList.style.display = filtered.length ? 'block' : 'none';
});

// Bahar click pe list hide
document.addEventListener('click', e => {
    if (!outItemInput.contains(e.target)) {
        outItemList.style.display = 'none';
    }
});
// Stock IN
document.getElementById('in-body').innerHTML = filteredIn.reverse().map(x => {
    try {
        return `
            <tr>
                <td>${x.date}</td><td>${x.vendor}</td><td>${x.item}</td><td>${x.qty}</td>
                <td>${formatMoney(x.rate)}</td><td>${formatMoney(x.qty*x.rate)}</td>
                <td class="no-print">
                    <button class="edit-btn" onclick="editEntry('in', ${x.originalIndex})">Edit</button>
                    <button class="delete-btn" onclick="deleteEntry('in', ${x.originalIndex})">Del</button>
                </td>
            </tr>
        `;
    } catch(e) {
        console.warn('Skipping corrupt IN entry', x, e);
        return '';
    }
}).join('') || `<tr><td colspan="7">No record found.</td></tr>`;

// Stock OUT
document.getElementById('out-body').innerHTML = filteredOut.reverse().map(x => {
    try {
        return `
            <tr>
                <td>${x.date}</td><td>${x.customer}</td><td>${x.item}</td><td>${x.qty}</td>
                <td>${formatMoney(x.rate)}</td><td>${formatMoney(x.qty*x.rate)}</td>
                <td class="no-print">
                    <button class="edit-btn" onclick="editEntry('out', ${x.originalIndex})">Edit</button>
                    <button class="delete-btn" onclick="deleteEntry('out', ${x.originalIndex})">Del</button>
                </td>
            </tr>
        `;
    } catch(e) {
        console.warn('Skipping corrupt OUT entry', x, e);
        return '';
    }
}).join('') || `<tr><td colspan="7">No record found.</td></tr>`;

// --- Stock IN ---
document.getElementById('in-body').innerHTML = filteredIn.reverse().map(x => {
    try {
        return `
        <tr>
            <td>${x.date}</td>
            <td>${x.vendor}</td>
            <td>${x.item}</td>
            <td>${x.qty}</td>
            <td>${formatMoney(x.rate)}</td>
            <td>${formatMoney(x.qty * x.rate)}</td>
            <td class="no-print">
                <button class="edit-btn" onclick="editEntry('in', ${x.originalIndex})">Edit</button>
                <button class="delete-btn" onclick="deleteEntry('in', ${x.originalIndex})">Del</button>
            </td>
        </tr>`;
    } catch(e) {
        console.warn('Skipping corrupt IN entry', x, e);
        return '';
    }
}).join('') || `<tr><td colspan="7">No record found.</td></tr>`;

// --- Stock OUT ---
document.getElementById('out-body').innerHTML = filteredOut.reverse().map(x => {
    try {
        return `
        <tr>
            <td>${x.date}</td>
            <td>${x.customer}</td>
            <td>${x.item}</td>
            <td>${x.qty}</td>
            <td>${formatMoney(x.rate)}</td>
            <td>${formatMoney(x.qty * x.rate)}</td>
            <td class="no-print">
                <button class="edit-btn" onclick="editEntry('out', ${x.originalIndex})">Edit</button>
                <button class="delete-btn" onclick="deleteEntry('out', ${x.originalIndex})">Del</button>
            </td>
        </tr>`;
    } catch(e) {
        console.warn('Skipping corrupt OUT entry', x, e);
        return '';
    }
}).join('') || `<tr><td colspan="7">No record found.</td></tr>`;



```