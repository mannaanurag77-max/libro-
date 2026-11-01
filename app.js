    /**
     * LIBRO APPLICATION ENGINE
     * Single-file reactive state architecture with complete local storage persistence
     */

    // --- 1. INITIAL SAMPLE DATASETS (ENRICHED WITH IMAGE 1 SP!K CATALOG) ---
    const SAMPLE_BOOKS = [
      { id: "BOK-001", code: "#0011", title: "Literature", writer: "Wade Warren", author: "Wade Warren", subject: "English", gradeClass: "02", publishDate: "22 Octo, 2022", isbn: "978-0132126953", category: "English", shelf: "Rack S12", totalCopies: 5, availableCopies: 4, timesBorrowed: 18, coverBg: "#10b981", coverIcon: "📚" },
      { id: "BOK-002", code: "#0021", title: "Mathematics", writer: "David Morgan", author: "David Morgan", subject: "Mathematics", gradeClass: "01", publishDate: "12 Sep, 2023", isbn: "978-1449373320", category: "Mathematics", shelf: "Rack S14", totalCopies: 4, availableCopies: 3, timesBorrowed: 15, coverBg: "#1e293b", coverIcon: "📐" },
      { id: "BOK-003", code: "#0031", title: "English", writer: "Kristin Watson", author: "Kristin Watson", subject: "Physics", gradeClass: "03", publishDate: "23 Nov, 2020", isbn: "978-0123821881", category: "Physics", shelf: "Rack S10", totalCopies: 3, availableCopies: 2, timesBorrowed: 12, coverBg: "#b45309", coverIcon: "📖" },
      { id: "BOK-004", code: "#0013", title: "Mathematics", writer: "Savannah Nguyen", author: "Savannah Nguyen", subject: "Mathematics", gradeClass: "04", publishDate: "12 Octo, 2022", isbn: "978-0132350884", category: "Mathematics", shelf: "Shelf A-01", totalCopies: 6, availableCopies: 5, timesBorrowed: 24, coverBg: "#4338ca", coverIcon: "📊" },
      { id: "BOK-005", code: "#0018", title: "English", writer: "Jacob Jones", author: "Jacob Jones", subject: "Physics", gradeClass: "01", publishDate: "22 Octo, 2022", isbn: "978-0486428178", category: "Physics", shelf: "Rack S12", totalCopies: 3, availableCopies: 3, timesBorrowed: 9, coverBg: "#991b1b", coverIcon: "⚡" },
      { id: "BOK-006", code: "#0019", title: "Mathematics", writer: "Arlene McCoy", author: "Arlene McCoy", subject: "Literature", gradeClass: "02", publishDate: "23 Sep, 2023", isbn: "978-0441172719", category: "Literature", shelf: "Shelf B-05", totalCopies: 4, availableCopies: 3, timesBorrowed: 14, coverBg: "#0f766e", coverIcon: "🌌" },
      { id: "BOK-007", code: "#0020", title: "Computer Networking", writer: "Andrew S. Tanenbaum", author: "Andrew S. Tanenbaum", subject: "Technology", gradeClass: "04", publishDate: "15 Jan, 2023", isbn: "978-0735211292", category: "Technology", shelf: "Rack S12", totalCopies: 5, availableCopies: 4, timesBorrowed: 21, coverBg: "#5048e5", coverIcon: "💻" },
      { id: "BOK-008", code: "#0024", title: "Cyber Security", writer: "Dr. Mark Wilson", author: "Dr. Mark Wilson", subject: "Technology", gradeClass: "03", publishDate: "08 Aug, 2023", isbn: "978-0994348500", category: "Technology", shelf: "Rack S14", totalCopies: 4, availableCopies: 3, timesBorrowed: 16, coverBg: "#0369a1", coverIcon: "🛡️" },
      { id: "BOK-009", code: "#0028", title: "Clean Code", writer: "Robert C. Martin", author: "Robert C. Martin", subject: "Technology", gradeClass: "02", publishDate: "11 May, 2022", isbn: "978-0140449334", category: "Technology", shelf: "Shelf A-01", totalCopies: 6, availableCopies: 5, timesBorrowed: 28, coverBg: "#047857", coverIcon: "⚙️" },
      { id: "BOK-010", code: "#0034", title: "Atomic Habits", writer: "James Clear", author: "James Clear", subject: "Self-Growth", gradeClass: "01", publishDate: "19 Feb, 2023", isbn: "978-1455586691", category: "Self-Growth", shelf: "Shelf C-01", totalCopies: 4, availableCopies: 4, timesBorrowed: 17, coverBg: "#d97706", coverIcon: "🎯" },
      { id: "BOK-011", code: "#0039", title: "Refactoring UI", writer: "Adam Wathan", author: "Adam Wathan", subject: "Design", gradeClass: "03", publishDate: "14 Jul, 2022", isbn: "978-0593135204", category: "Design", shelf: "Shelf D-02", totalCopies: 3, availableCopies: 3, timesBorrowed: 13, coverBg: "#7c3aed", coverIcon: "🎨" },
      { id: "BOK-012", code: "#0042", title: "Theory of Scheduling", writer: "Richard W. Conway", author: "Richard W. Conway", subject: "Technology", gradeClass: "04", publishDate: "05 Dec, 2021", isbn: "978-0062316097", category: "Technology", shelf: "Rack S12", totalCopies: 3, availableCopies: 3, timesBorrowed: 10, coverBg: "#be123c", coverIcon: "⏱️" }
    ];

    const SAMPLE_MEMBERS = [
      { id: "MEM-1001", name: "Alexander Vance", email: "alex.vance@libro.edu", phone: "+1 (555) 234-5678", joinedDate: "2025-01-15", status: "Active" },
      { id: "MEM-1002", name: "Sophia Lin", email: "sophia.lin@techcorp.io", phone: "+1 (555) 345-6789", joinedDate: "2025-03-22", status: "Active" },
      { id: "MEM-1003", name: "Marcus Rivera", email: "marcus.r@designhub.co", phone: "+1 (555) 456-7890", joinedDate: "2025-05-10", status: "Active" },
      { id: "MEM-1004", name: "Elena Rostova", email: "elena.rostova@quantum.org", phone: "+1 (555) 567-8901", joinedDate: "2025-07-04", status: "Active" },
      { id: "MEM-1005", name: "Dev Patel", email: "dev.patel@horizon.dev", phone: "+1 (555) 678-9012", joinedDate: "2025-09-19", status: "Blocked" }
    ];

    const todayStr = new Date().toISOString().split('T')[0];
    const pastDueStr = new Date(Date.now() - 4 * 86400000).toISOString().split('T')[0];
    const futureDueStr = new Date(Date.now() + 10 * 86400000).toISOString().split('T')[0];

    const SAMPLE_TRANSACTIONS = [
      {
        id: "TX-901",
        bookId: "BOK-006",
        bookTitle: "Mathematics",
        memberId: "MEM-1004",
        memberName: "Elena Rostova",
        issueDate: new Date(Date.now() - 18 * 86400000).toISOString().split('T')[0],
        dueDate: pastDueStr,
        returnDate: null,
        renewCount: 0,
        status: "Active"
      },
      {
        id: "TX-902",
        bookId: "BOK-009",
        bookTitle: "Clean Code",
        memberId: "MEM-1001",
        memberName: "Alexander Vance",
        issueDate: todayStr,
        dueDate: futureDueStr,
        returnDate: null,
        renewCount: 0,
        status: "Active"
      },
      {
        id: "TX-903",
        bookId: "BOK-008",
        bookTitle: "Cyber Security",
        memberId: "MEM-1002",
        memberName: "Sophia Lin",
        issueDate: todayStr,
        dueDate: futureDueStr,
        returnDate: null,
        renewCount: 0,
        status: "Active"
      }
    ];

    const SAMPLE_FINES = [
      {
        id: "FINE-501",
        txId: "TX-901",
        memberId: "MEM-1004",
        memberName: "Elena Rostova",
        bookTitle: "Mathematics",
        daysLate: 4,
        amount: 8,
        status: "Unpaid"
      }
    ];

    const DEFAULT_ACCOUNTS = [
      {
        id: "USR-001",
        name: "Priscilla Lily",
        email: "admin@libro.edu",
        username: "admin",
        password: "admin123",
        role: "Admin",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
      },
      {
        id: "USR-002",
        name: "James Wilson",
        email: "librarian@libro.edu",
        username: "librarian",
        password: "lib123",
        role: "Librarian",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
      }
    ];

    // --- 2. GLOBAL STATE ---
    const state = {
      currentUser: null,
      isAuthenticated: false,
      admins: [],
      currentView: 'dashboard',
      bookViewMode: 'table',
      selectedBookIds: ['BOK-002'], // Row 2 selected like in Image 1
      tableSearch: '',
      currentPage: 3, // Active page 3 matching Image 1
      pageSize: 10,
      books: [],
      members: [],
      transactions: [],
      fines: [],
      filters: {
        category: 'all',
        availability: 'all',
        searchQuery: ''
      }
    };

    const STORAGE_KEY = 'libro_theme_lms_v3';

    // --- 0. AUTHENTICATION & ACCESS CONTROL ---
    function initAuth() {
      updateAuthUI();
    }

    function switchAuthTab(tab) {
      const btnIn = document.getElementById('auth-tab-btn-signin');
      const btnUp = document.getElementById('auth-tab-btn-signup');
      const formIn = document.getElementById('auth-signin-form');
      const formUp = document.getElementById('auth-signup-form');

      if (tab === 'signin') {
        btnIn.classList.add('active');
        btnUp.classList.remove('active');
        formIn.style.display = 'block';
        formUp.style.display = 'none';
      } else {
        btnIn.classList.remove('active');
        btnUp.classList.add('active');
        formIn.style.display = 'none';
        formUp.style.display = 'block';
      }
    }

    function selectRolePill(role) {
      document.querySelectorAll('.role-pill-option').forEach(p => {
        p.classList.toggle('active', p.dataset.role === role);
      });
      document.getElementById('auth-role-in').value = role;
    }

    function autoFillCredentials(user, pass, role) {
      document.getElementById('auth-user-in').value = user;
      document.getElementById('auth-pass-in').value = pass;
      selectRolePill(role);
      showToast("Credentials Set", `Filled demo ${role} credentials.`);
    }

    function handleSignIn(e) {
      if (e) e.preventDefault();
      const userOrEmail = document.getElementById('auth-user-in').value.trim().toLowerCase();
      const pass = document.getElementById('auth-pass-in').value;

      if (!state.admins || state.admins.length === 0) {
        state.admins = JSON.parse(JSON.stringify(DEFAULT_ACCOUNTS));
      }

      const account = state.admins.find(a =>
        (a.username.toLowerCase() === userOrEmail || a.email.toLowerCase() === userOrEmail) &&
        a.password === pass
      );

      if (!account) {
        showToast("Access Denied", "Invalid username or password. Check demo credentials.");
        return;
      }

      state.currentUser = account;
      state.isAuthenticated = true;
      const remember = document.getElementById('auth-remember-chk')?.checked;
      if (remember) {
        localStorage.setItem('libro_auth_user', JSON.stringify(account));
      }
      updateAuthUI();
      renderAll();
      showToast(`Welcome back, ${account.name}`, `Logged in as ${account.role}.`);
    }

    function handleSignUp(e) {
      if (e) e.preventDefault();
      const name = document.getElementById('signup-name-in').value.trim();
      const email = document.getElementById('signup-email-in').value.trim();
      const role = document.getElementById('signup-role-in').value;
      const pass = document.getElementById('signup-pass-in').value;
      const passConf = document.getElementById('signup-passconf-in').value;

      if (pass !== passConf) {
        showToast("Registration Error", "Passwords do not match.");
        return;
      }

      if (!state.admins || state.admins.length === 0) {
        state.admins = JSON.parse(JSON.stringify(DEFAULT_ACCOUNTS));
      }

      if (state.admins.some(a => a.email.toLowerCase() === email.toLowerCase())) {
        showToast("Registration Error", "An account with this email already exists.");
        return;
      }

      const newAdmin = {
        id: `USR-${Math.floor(100 + Math.random() * 900)}`,
        name,
        email,
        username: email.split('@')[0],
        password: pass,
        role,
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
      };

      state.admins.push(newAdmin);
      saveState();

      // Auto login
      state.currentUser = newAdmin;
      state.isAuthenticated = true;
      localStorage.setItem('libro_auth_user', JSON.stringify(newAdmin));
      updateAuthUI();
      renderAll();
      showToast("Account Created", `Welcome, ${newAdmin.name}! You are registered as ${newAdmin.role}.`);
    }

    function handleLogout(e) {
      if (e) e.stopPropagation();
      state.isAuthenticated = false;
      state.currentUser = null;
      localStorage.removeItem('libro_auth_user');
      updateAuthUI();
      showToast("Signed Out", "You have returned to the Login & Sign-Up portal.");
    }

    function bypassToDemo() {
      state.currentUser = DEFAULT_ACCOUNTS[0]; // Priscilla Lily Admin
      state.isAuthenticated = true;
      localStorage.setItem('libro_auth_user', JSON.stringify(state.currentUser));
      updateAuthUI();
      renderAll();
      showToast("Demo Access", "Entered portal as Priscilla Lily (Admin).");
    }

    function updateAuthUI() {
      const authOverlay = document.getElementById('auth-screen');
      const appViewport = document.querySelector('.app-viewport');

      if (state.isAuthenticated && state.currentUser) {
        if (authOverlay) authOverlay.classList.add('hidden');
        if (appViewport) appViewport.style.display = 'flex';

        // Update UI badges
        const topName = document.getElementById('top-user-name');
        const topRole = document.getElementById('top-user-role');
        const topAvatar = document.getElementById('top-user-avatar');
        const sideRole = document.querySelector('.admin-role-label');
        const sideAvatar = document.querySelector('.admin-avatar-img');

        if (topName) topName.textContent = state.currentUser.name;
        if (topRole) topRole.textContent = state.currentUser.role;
        if (topAvatar && state.currentUser.avatar) topAvatar.src = state.currentUser.avatar;
        if (sideRole) sideRole.textContent = state.currentUser.role.toUpperCase();
        if (sideAvatar && state.currentUser.avatar) sideAvatar.src = state.currentUser.avatar;
      } else {
        if (authOverlay) authOverlay.classList.remove('hidden');
        if (appViewport) appViewport.style.display = 'none';
      }
    }

    function loadState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          state.books = parsed.books || SAMPLE_BOOKS;
          state.members = parsed.members || SAMPLE_MEMBERS;
          state.transactions = parsed.transactions || SAMPLE_TRANSACTIONS;
          state.fines = parsed.fines || SAMPLE_FINES;
          state.admins = parsed.admins || DEFAULT_ACCOUNTS;
        } else {
          resetDemoDataSilent();
        }
      } catch (e) {
        console.warn("Storage read error, using sample data:", e);
        resetDemoDataSilent();
      }

      // Check user session
      try {
        const savedUser = localStorage.getItem('libro_auth_user');
        if (savedUser) {
          state.currentUser = JSON.parse(savedUser);
          state.isAuthenticated = true;
        } else {
          state.isAuthenticated = false;
        }
      } catch (e) {
        state.isAuthenticated = false;
      }
    }

    function saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          books: state.books,
          members: state.members,
          transactions: state.transactions,
          fines: state.fines,
          admins: state.admins
        }));
      } catch (e) { console.error("Storage write error:", e); }
    }

    function resetDemoDataSilent() {
      state.books = JSON.parse(JSON.stringify(SAMPLE_BOOKS));
      state.members = JSON.parse(JSON.stringify(SAMPLE_MEMBERS));
      state.transactions = JSON.parse(JSON.stringify(SAMPLE_TRANSACTIONS));
      state.fines = JSON.parse(JSON.stringify(SAMPLE_FINES));
      state.admins = JSON.parse(JSON.stringify(DEFAULT_ACCOUNTS));
      saveState();
    }

    function resetDemoData() {
      if (confirm("Reset library catalog back to pre-loaded Libro demo state?")) {
        resetDemoDataSilent();
        showToast("Success", "Catalog reset to demo data.");
        renderAll();
      }
    }

    // --- 3. TOAST ALERTS ---
    function showToast(title, message) {
      const tray = document.getElementById('toast-tray');
      const toast = document.createElement('div');
      toast.className = 'toast-notification';
      toast.innerHTML = `
        <span style="font-size:1.1rem;">📘</span>
        <div style="flex:1;">
          <div style="font-weight:700; color:var(--text-heading);">${escapeHTML(title)}</div>
          <div style="color:var(--text-muted); font-size:0.75rem;">${escapeHTML(message)}</div>
        </div>
      `;
      tray.appendChild(toast);

      setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 250);
      }, 3200);
    }

    // --- 4. VIEW ROUTING ---
    const viewMeta = {
      dashboard: { title: "Dashboard", crumb: "Home / Overview" },
      books: { title: "Library", crumb: "Home / Library Books" },
      students: { title: "Students", crumb: "Home / Enrolled Readers" },
      issuereturn: { title: "Issue / Return", crumb: "Home / Circulation Desk" },
      overdue: { title: "Overdue", crumb: "Home / Delinquent Loans" },
      fines: { title: "Fines", crumb: "Home / Fee Collections" },
      reports: { title: "Reports", crumb: "Home / Data & Analytics" }
    };

    function switchView(viewName) {
      state.currentView = viewName;

      document.querySelectorAll('.nav-link-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === viewName);
      });

      document.querySelectorAll('.view-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `view-${viewName}`);
      });

      const meta = viewMeta[viewName] || { title: "Dashboard", crumb: "Home / Overview" };
      document.getElementById('page-heading').textContent = meta.title;
      document.getElementById('page-breadcrumbs').textContent = meta.crumb;

      // Close mobile drawer
      document.getElementById('sidebar').classList.remove('open');

      if (viewName === 'dashboard') renderDashboard();
      if (viewName === 'books') renderBooks();
      if (viewName === 'students') renderStudents();
      if (viewName === 'issuereturn') renderIssueReturn();
      if (viewName === 'overdue') renderOverdue();
      if (viewName === 'fines') renderFines();
      if (viewName === 'reports') renderReports();
    }

    document.querySelectorAll('.nav-link-btn').forEach(b => {
      b.addEventListener('click', () => switchView(b.dataset.view));
    });

    document.getElementById('btn-mobile-sidebar').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('open');
    });

    // Global Top Search
    document.getElementById('global-search').addEventListener('input', (e) => {
      state.filters.searchQuery = e.target.value.trim();
      if (state.currentView !== 'books' && state.filters.searchQuery) {
        switchView('books');
      }
      renderBooks();
    });

    // --- 5. DASHBOARD STATS & NOTIFICATIONS ---
    function renderDashboard() {
      const activeBorrowed = state.transactions.filter(t => t.status === 'Active').length;
      const totalAvailable = state.books.reduce((acc, b) => acc + (b.availableCopies || 0), 0);
      const today = new Date().toISOString().split('T')[0];
      const overdue = state.transactions.filter(t => t.status === 'Active' && t.dueDate < today).length;

      document.getElementById('dash-borrowed-count').textContent = activeBorrowed > 0 ? activeBorrowed : 576;
      document.getElementById('dash-available-count').textContent = totalAvailable > 0 ? totalAvailable : 6875;
      document.getElementById('dash-lost-count').textContent = overdue > 0 ? overdue : 20;
    }

    function switchNotifTab(btn, period) {
      document.querySelectorAll('.notif-tabs-bar .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const container = document.getElementById('notif-list-container');
      if (period === 'today') {
        container.innerHTML = `
          <li class="notif-feed-item"><span>5 More networking book are needed.</span><span class="notif-time-tag">15 min ago</span></li>
          <li class="notif-feed-item"><span>Theory of scheduling books are still not added to rack S12.</span><span class="notif-time-tag">30 min ago</span></li>
          <li class="notif-feed-item"><span>3 Cyber security management books are returned .</span><span class="notif-time-tag">50 min ago</span></li>
        `;
      } else if (period === 'week') {
        container.innerHTML = `
          <li class="notif-feed-item"><span>Weekly circulation audit completed for 12 classes.</span><span class="notif-time-tag">2 days ago</span></li>
          <li class="notif-feed-item"><span>Overdue penalty notices delivered to 4 students.</span><span class="notif-time-tag">4 days ago</span></li>
        `;
      } else {
        container.innerHTML = `
          <li class="notif-feed-item"><span>Monthly inventory reconcile finished with 98% accuracy.</span><span class="notif-time-tag">2 weeks ago</span></li>
          <li class="notif-feed-item"><span>Added 250 new publications to Science & Tech racks.</span><span class="notif-time-tag">3 weeks ago</span></li>
        `;
      }
    }

    // --- 6. BOOKS INVENTORY & SP!K TABLE ENGINE ---
    function setBookViewMode(mode) {
      state.bookViewMode = mode;
      const tableWrap = document.getElementById('books-table-wrapper');
      const gridWrap = document.getElementById('books-grid');
      const btnTable = document.getElementById('btn-view-table');
      const btnGrid = document.getElementById('btn-view-grid');

      if (mode === 'table') {
        if (tableWrap) tableWrap.style.display = 'block';
        if (gridWrap) gridWrap.style.display = 'none';
        if (btnTable) btnTable.classList.add('active');
        if (btnGrid) btnGrid.classList.remove('active');
      } else {
        if (tableWrap) tableWrap.style.display = 'none';
        if (gridWrap) gridWrap.style.display = 'grid';
        if (btnTable) btnTable.classList.remove('active');
        if (btnGrid) btnGrid.classList.add('active');
      }
      renderBooks();
    }

    function toggleSelectAllBooks(checked) {
      if (checked) {
        state.selectedBookIds = state.books.map(b => b.id);
      } else {
        state.selectedBookIds = [];
      }
      renderBooks();
      showToast("Selection Updated", checked ? `Selected all ${state.books.length} books` : "Cleared book selections");
    }

    function toggleBookSelection(id, checked) {
      if (checked) {
        if (!state.selectedBookIds.includes(id)) state.selectedBookIds.push(id);
      } else {
        state.selectedBookIds = state.selectedBookIds.filter(x => x !== id);
      }
      renderBooks();
    }

    function handleTableSearch(val) {
      state.tableSearch = (val || '').toLowerCase().trim();
      renderBooks();
    }

    function goToPage(pg) {
      if (pg < 1) pg = 1;
      if (pg > 10) pg = 10;
      state.currentPage = pg;
      renderBooks();
    }

    function setPageSize(size) {
      state.pageSize = parseInt(size, 10) || 10;
      renderBooks();
    }

    function renderBooks() {
      const q = (state.filters.searchQuery || state.tableSearch || '').toLowerCase();
      const cat = state.filters.category;
      const avail = state.filters.availability;

      let list = state.books.filter(b => {
        const text = `${b.title} ${b.writer || b.author} ${b.code || ''} ${b.isbn} ${b.subject || b.category} ${b.gradeClass || ''}`.toLowerCase();
        const matchQ = !q || text.includes(q);
        const matchCat = cat === 'all' || (b.category === cat || b.subject === cat);
        const matchAvail = avail === 'all' || (avail === 'available' && b.availableCopies > 0) || (avail === 'out' && b.availableCopies === 0);
        return matchQ && matchCat && matchAvail;
      });

      // 1. RENDER SP!K TABLE (IMAGE 1 EXACT STYLE)
      const tbody = document.getElementById('books-table-tbody');
      const allChk = document.getElementById('chk-select-all-books');
      if (tbody) {
        if (list.length === 0) {
          tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:3rem; color:var(--text-muted);">No books found matching search criteria.</td></tr>`;
        } else {
          tbody.innerHTML = list.map(b => {
            const isSelected = state.selectedBookIds.includes(b.id);
            const isAvail = b.availableCopies > 0;
            return `
              <tr class="${isSelected ? 'book-row-selected' : ''}">
                <td>
                  <input type="checkbox" class="spik-chk" ${isSelected ? 'checked' : ''} onchange="toggleBookSelection('${b.id}', this.checked)">
                </td>
                <td>
                  <div style="display:flex; align-items:center; gap:0.75rem;">
                    <div class="book-thumb-circle" style="background:${b.coverBg || '#4f46e5'};">
                      ${b.coverIcon || '📖'}
                    </div>
                    <div>
                      <strong style="color:var(--text-heading); font-size:0.86rem;">${escapeHTML(b.title)}</strong>
                    </div>
                  </div>
                </td>
                <td style="color:var(--text-heading); font-size:0.82rem;">${escapeHTML(b.writer || b.author)}</td>
                <td>
                  <span style="font-family:monospace; font-weight:600; color:var(--text-muted); font-size:0.82rem;">
                    ${escapeHTML(b.code || b.id)}
                  </span>
                </td>
                <td style="color:var(--text-body); font-size:0.82rem;">${escapeHTML(b.subject || b.category)}</td>
                <td style="color:var(--text-body); font-size:0.82rem;">${escapeHTML(b.gradeClass || '01')}</td>
                <td style="color:var(--text-muted); font-size:0.8rem;">${escapeHTML(b.publishDate || '22 Octo, 2022')}</td>
                <td>
                  <span class="status-badge ${isAvail ? 'status-available' : 'status-out'}">
                    ${isAvail ? `Available (${b.availableCopies}/${b.totalCopies})` : 'Out of Stock'}
                  </span>
                </td>
                <td style="text-align:right;">
                  <div style="display:inline-flex; align-items:center; gap:0.35rem;">
                    <button class="spik-icon-btn" title="Delete book" onclick="deleteBook('${b.id}')">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                    <button class="spik-icon-btn" title="Edit book" onclick="openEditBookModal('${b.id}')">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                    ${isAvail ? `
                      <button class="btn-action-primary" style="padding:0.25rem 0.55rem; font-size:0.72rem; margin-left:0.25rem;" onclick="directIssue('${b.id}')">
                        Issue
                      </button>
                    ` : ''}
                  </div>
                </td>
              </tr>
            `;
          }).join('');
        }
        if (allChk) {
          allChk.checked = list.length > 0 && list.every(b => state.selectedBookIds.includes(b.id));
        }
      }

      // Render Pagination (matching Image 1: < 1 2 [3] 4 5 ... 100 >)
      const pagWrap = document.getElementById('spik-pagination-controls');
      if (pagWrap) {
        const cur = state.currentPage || 3;
        pagWrap.innerHTML = `
          <button class="spik-page-btn" onclick="goToPage(${cur - 1})" title="Previous Page">&lt;</button>
          <button class="spik-page-btn ${cur === 1 ? 'active' : ''}" onclick="goToPage(1)">1</button>
          <button class="spik-page-btn ${cur === 2 ? 'active' : ''}" onclick="goToPage(2)">2</button>
          <button class="spik-page-btn ${cur === 3 ? 'active' : ''}" onclick="goToPage(3)">3</button>
          <button class="spik-page-btn ${cur === 4 ? 'active' : ''}" onclick="goToPage(4)">4</button>
          <button class="spik-page-btn ${cur === 5 ? 'active' : ''}" onclick="goToPage(5)">5</button>
          <span class="spik-page-dots">&bull;&bull;&bull;</span>
          <button class="spik-page-btn ${cur === 10 ? 'active' : ''}" onclick="goToPage(10)">100</button>
          <button class="spik-page-btn" onclick="goToPage(${cur + 1})" title="Next Page">&gt;</button>
        `;
      }

      // 2. RENDER GRID CARDS VIEW
      const grid = document.getElementById('books-grid');
      if (grid) {
        if (list.length === 0) {
          grid.innerHTML = `
            <div class="libro-card" style="grid-column:1/-1; padding:3rem; text-align:center;">
              <h3>No books found matching criteria.</h3>
            </div>
          `;
        } else {
          const gradients = [
            'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
            'linear-gradient(135deg, #0e7490 0%, #0369a1 100%)',
            'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
            'linear-gradient(135deg, #059669 0%, #047857 100%)',
            'linear-gradient(135deg, #e11d48 0%, #be123c 100%)'
          ];

          grid.innerHTML = list.map((b, idx) => {
            const isAvail = b.availableCopies > 0;
            const grad = gradients[idx % gradients.length];
            return `
              <div class="libro-card book-item-box">
                <div class="book-cover-banner" style="background:${grad};">
                  <span class="genre-tag">${escapeHTML(b.subject || b.category)}</span>
                  <div>
                    <div class="book-cover-title">${escapeHTML(b.title)}</div>
                    <div class="book-cover-author">by ${escapeHTML(b.writer || b.author)}</div>
                  </div>
                </div>

                <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); margin-bottom:0.6rem;">
                  <span>📍 ${escapeHTML(b.shelf)}</span>
                  <span style="font-family:monospace;">${escapeHTML(b.code || b.isbn)}</span>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
                  <span class="status-badge ${isAvail ? 'status-available' : 'status-out'}">
                    ${isAvail ? `Available (${b.availableCopies}/${b.totalCopies})` : 'Out of Stock'}
                  </span>
                  <span style="font-size:0.72rem; color:var(--text-muted);">Class ${escapeHTML(b.gradeClass || '01')}</span>
                </div>

                <div style="display:flex; gap:0.4rem; margin-top:auto; padding-top:0.65rem; border-top:1px solid var(--border-line);">
                  ${isAvail ? `
                    <button class="btn-action-primary" style="flex:1; padding:0.4rem; font-size:0.75rem; justify-content:center;" onclick="directIssue('${b.id}')">
                      Issue Book
                    </button>
                  ` : `
                    <button class="btn-action-secondary" style="flex:1; padding:0.4rem; font-size:0.75rem; justify-content:center; opacity:0.6;" disabled>
                      Out of Stock
                    </button>
                  `}
                  <button class="btn-action-secondary" style="padding:0.4rem 0.6rem; font-size:0.75rem;" title="Edit book" onclick="openEditBookModal('${b.id}')">
                    ✏️
                  </button>
                  <button class="btn-action-secondary" style="padding:0.4rem 0.6rem; font-size:0.75rem; color:var(--accent-red);" title="Delete book" onclick="deleteBook('${b.id}')">
                    🗑️
                  </button>
                </div>
              </div>
            `;
          }).join('');
        }
      }
    }

    document.querySelectorAll('#category-pills-list .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#category-pills-list .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.filters.category = btn.dataset.cat;
        renderBooks();
      });
    });

    document.getElementById('select-availability').addEventListener('change', (e) => {
      state.filters.availability = e.target.value;
      renderBooks();
    });

    function openAddBookModal() {
      document.getElementById('edit-book-id').value = '';
      document.getElementById('modal-book-heading').textContent = 'Add New Book';
      document.getElementById('form-book-modal').reset();
      openModal('modal-book');
    }

    function openEditBookModal(bookId) {
      const b = state.books.find(x => x.id === bookId);
      if (!b) return;

      document.getElementById('edit-book-id').value = b.id;
      document.getElementById('modal-book-heading').textContent = 'Edit Book Details';
      document.getElementById('book-title-in').value = b.title;
      document.getElementById('book-author-in').value = b.author;
      document.getElementById('book-cat-in').value = b.category;
      document.getElementById('book-isbn-in').value = b.isbn;
      document.getElementById('book-shelf-in').value = b.shelf;
      document.getElementById('book-copies-in').value = b.totalCopies;

      openModal('modal-book');
    }

    function saveBook(e) {
      e.preventDefault();
      const editId = document.getElementById('edit-book-id').value;
      const title = document.getElementById('book-title-in').value.trim();
      const author = document.getElementById('book-author-in').value.trim();
      const category = document.getElementById('book-cat-in').value;
      const isbn = document.getElementById('book-isbn-in').value.trim();
      const shelf = document.getElementById('book-shelf-in').value.trim();
      const copies = parseInt(document.getElementById('book-copies-in').value, 10);

      const dup = state.books.find(b => b.isbn.toLowerCase() === isbn.toLowerCase() && b.id !== editId);
      if (dup) {
        showToast("Error", `A book with ISBN ${isbn} already exists.`);
        return;
      }

      if (editId) {
        const book = state.books.find(b => b.id === editId);
        if (book) {
          const diff = copies - book.totalCopies;
          book.title = title;
          book.author = author;
          book.category = category;
          book.isbn = isbn;
          book.shelf = shelf;
          book.totalCopies = copies;
          book.availableCopies = Math.max(0, book.availableCopies + diff);
          showToast("Saved", `Updated "${title}" details.`);
        }
      } else {
        state.books.unshift({
          id: `BOK-${Date.now().toString().slice(-4)}`,
          title,
          author,
          category,
          isbn,
          shelf,
          totalCopies: copies,
          availableCopies: copies,
          timesBorrowed: 0
        });
        showToast("Book Added", `"${title}" added to inventory.`);
      }

      saveState();
      closeModal('modal-book');
      renderBooks();
      renderDashboard();
    }

    function deleteBook(bookId) {
      if (state.currentUser && state.currentUser.role !== 'Admin') {
        showToast("Permission Denied", "Only administrators can delete records. Librarians cannot remove inventory.");
        return;
      }

      const book = state.books.find(b => b.id === bookId);
      if (!book) return;

      const activeIssues = state.transactions.filter(t => t.bookId === bookId && t.status === 'Active');
      if (activeIssues.length > 0) {
        showToast("Blocked", `Book has ${activeIssues.length} active issues. Must return first.`);
        return;
      }

      if (confirm(`Delete "${book.title}" from catalog?`)) {
        state.books = state.books.filter(b => b.id !== bookId);
        saveState();
        showToast("Deleted", `Removed "${book.title}".`);
        renderBooks();
        renderDashboard();
      }
    }

    // --- 7. STUDENTS / MEMBERS ---
    function renderStudents() {
      const tbody = document.getElementById('students-table-body');
      if (state.members.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:2rem;">No students registered.</td></tr>`;
        return;
      }

      tbody.innerHTML = state.members.map(m => {
        const activeCount = state.transactions.filter(t => t.memberId === m.id && t.status === 'Active').length;
        return `
          <tr>
            <td style="font-family:monospace; color:var(--libro-purple-primary); font-weight:700;">${escapeHTML(m.id)}</td>
            <td><strong>${escapeHTML(m.name)}</strong></td>
            <td>${escapeHTML(m.email)}</td>
            <td>${escapeHTML(m.phone)}</td>
            <td>${escapeHTML(m.joinedDate)}</td>
            <td><span class="status-badge ${activeCount > 0 ? 'status-available' : ''}">${activeCount} active</span></td>
            <td><span class="status-badge ${m.status === 'Active' ? 'status-available' : 'status-out'}">${escapeHTML(m.status)}</span></td>
            <td>
              <div style="display:flex; gap:0.4rem;">
                <button class="btn-action-secondary" style="padding:0.35rem 0.6rem; font-size:0.75rem;" onclick="viewStudentProfile('${m.id}')">View</button>
                <button class="btn-action-secondary" style="padding:0.35rem 0.6rem; font-size:0.75rem;" onclick="openEditMemberModal('${m.id}')">✏️</button>
                <button class="btn-action-secondary" style="padding:0.35rem 0.6rem; font-size:0.75rem; color:var(--accent-red);" onclick="deleteStudent('${m.id}')">🗑️</button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    }

    function openAddMemberModal() {
      document.getElementById('edit-student-id').value = '';
      document.getElementById('modal-student-heading').textContent = 'Register Student';
      document.getElementById('form-student-modal').reset();
      openModal('modal-student');
    }

    function openEditMemberModal(id) {
      const m = state.members.find(x => x.id === id);
      if (!m) return;

      document.getElementById('edit-student-id').value = m.id;
      document.getElementById('modal-student-heading').textContent = 'Edit Student Profile';
      document.getElementById('student-name-in').value = m.name;
      document.getElementById('student-email-in').value = m.email;
      document.getElementById('student-phone-in').value = m.phone;
      document.getElementById('student-status-in').value = m.status;

      openModal('modal-student');
    }

    function saveStudent(e) {
      e.preventDefault();
      const editId = document.getElementById('edit-student-id').value;
      const name = document.getElementById('student-name-in').value.trim();
      const email = document.getElementById('student-email-in').value.trim();
      const phone = document.getElementById('student-phone-in').value.trim();
      const status = document.getElementById('student-status-in').value;

      if (editId) {
        const m = state.members.find(x => x.id === editId);
        if (m) {
          m.name = name;
          m.email = email;
          m.phone = phone;
          m.status = status;
          showToast("Profile Saved", `Updated details for ${name}.`);
        }
      } else {
        const newId = `MEM-${Math.floor(1000 + Math.random() * 9000)}`;
        state.members.push({
          id: newId,
          name,
          email,
          phone,
          joinedDate: new Date().toISOString().split('T')[0],
          status
        });
        showToast("Student Registered", `Created ${newId} for ${name}.`);
      }

      saveState();
      closeModal('modal-student');
      renderStudents();
    }

    function deleteStudent(id) {
      if (state.currentUser && state.currentUser.role !== 'Admin') {
        showToast("Permission Denied", "Only administrators can delete records. Librarians cannot remove student records.");
        return;
      }

      const m = state.members.find(x => x.id === id);
      if (!m) return;

      const activeIssues = state.transactions.filter(t => t.memberId === id && t.status === 'Active');
      if (activeIssues.length > 0) {
        showToast("Blocked", `${m.name} has ${activeIssues.length} active loans. Must return first.`);
        return;
      }

      if (confirm(`Remove student ${m.name} (${m.id})?`)) {
        state.members = state.members.filter(x => x.id !== id);
        saveState();
        showToast("Deleted", `Removed ${m.name}.`);
        renderStudents();
      }
    }

    function viewStudentProfile(id) {
      const m = state.members.find(x => x.id === id);
      if (!m) return;

      const loans = state.transactions.filter(t => t.memberId === id);
      const active = loans.filter(t => t.status === 'Active');
      const unpaidFines = state.fines.filter(f => f.memberId === id && f.status === 'Unpaid');
      const finesSum = unpaidFines.reduce((a, b) => a + b.amount, 0);

      document.getElementById('student-profile-body').innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-line);">
          <div>
            <h4 style="font-size:1.15rem; font-weight:700;">${escapeHTML(m.name)}</h4>
            <span style="font-family:monospace; color:var(--libro-purple-primary); font-weight:700;">ID: ${escapeHTML(m.id)}</span>
            <div style="font-size:0.78rem; color:var(--text-muted); margin-top:0.2rem;">${escapeHTML(m.email)} &bull; ${escapeHTML(m.phone)}</div>
          </div>
          <span class="status-badge ${m.status === 'Active' ? 'status-available' : 'status-out'}">${escapeHTML(m.status)}</span>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:1.15rem;">
          <div style="background:#f8fafc; padding:0.75rem; border-radius:var(--radius-sm); border:1px solid var(--card-border);">
            <span style="font-size:0.75rem; color:var(--text-muted);">Active Borrowed</span>
            <div style="font-size:1.3rem; font-weight:700;">${active.length} / 3 max</div>
          </div>
          <div style="background:#f8fafc; padding:0.75rem; border-radius:var(--radius-sm); border:1px solid var(--card-border);">
            <span style="font-size:0.75rem; color:var(--text-muted);">Pending Fines</span>
            <div style="font-size:1.3rem; font-weight:700; color:${finesSum > 0 ? 'var(--accent-red)' : 'var(--accent-green)'};">₹${finesSum}</div>
          </div>
        </div>

        <div style="font-size:0.85rem; font-weight:700; margin-bottom:0.5rem;">Circulation Records (${loans.length})</div>
        <div style="max-height:180px; overflow-y:auto;">
          <table class="libro-data-table" style="font-size:0.78rem;">
            <thead>
              <tr><th>Book</th><th>Due Date</th><th>Status</th></tr>
            </thead>
            <tbody>
              ${loans.length === 0 ? `<tr><td colspan="3" style="text-align:center;">No history.</td></tr>` :
          loans.map(l => `<tr><td><strong>${escapeHTML(l.bookTitle)}</strong></td><td>${escapeHTML(l.dueDate)}</td><td>${escapeHTML(l.status)}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      `;

      openModal('modal-student-profile');
    }

    // --- 8. ISSUE & RETURN ENGINE ---
    function renderIssueReturn() {
      const memberSelect = document.getElementById('select-issue-member');
      memberSelect.innerHTML = `<option value="">-- Choose Student --</option>` + state.members.map(m => `
        <option value="${m.id}">${escapeHTML(m.name)} (${m.id}) ${m.status === 'Blocked' ? '[BLOCKED]' : ''}</option>
      `).join('');

      const bookSelect = document.getElementById('select-issue-book');
      bookSelect.innerHTML = `<option value="">-- Choose Book --</option>` + state.books.map(b => `
        <option value="${b.id}" ${b.availableCopies === 0 ? 'disabled' : ''}>
          ${escapeHTML(b.title)} (${b.availableCopies}/${b.totalCopies} available)
        </option>
      `).join('');

      const tbody = document.getElementById('active-issues-tbody');
      const active = state.transactions.filter(t => t.status === 'Active');
      document.getElementById('active-loans-badge').textContent = `${active.length} active`;

      if (active.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:2rem;">No active loans. All books returned!</td></tr>`;
        return;
      }

      const today = new Date().toISOString().split('T')[0];
      tbody.innerHTML = active.map(tx => {
        const isLate = tx.dueDate < today;
        return `
          <tr>
            <td style="font-family:monospace; color:var(--libro-purple-primary); font-weight:700;">${escapeHTML(tx.id)}</td>
            <td><strong>${escapeHTML(tx.bookTitle)}</strong></td>
            <td>${escapeHTML(tx.memberName)}</td>
            <td>${escapeHTML(tx.issueDate)}</td>
            <td style="color:${isLate ? 'var(--accent-red)' : 'inherit'}; font-weight:${isLate ? '700' : '500'};">
              ${escapeHTML(tx.dueDate)} ${isLate ? '⚠️' : ''}
            </td>
            <td>${tx.renewCount || 0} / 2</td>
            <td>
              <div style="display:flex; gap:0.4rem;">
                <button class="btn-action-primary" style="padding:0.3rem 0.65rem; font-size:0.75rem;" onclick="processReturn('${tx.id}')">Return</button>
                <button class="btn-action-secondary" style="padding:0.3rem 0.65rem; font-size:0.75rem;" onclick="processRenewal('${tx.id}')">Extend +7d</button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    }

    function directIssue(bookId) {
      switchView('issuereturn');
      const s = document.getElementById('select-issue-book');
      if (s) s.value = bookId;
    }

    document.getElementById('form-issue-book').addEventListener('submit', (e) => {
      e.preventDefault();
      const memberId = document.getElementById('select-issue-member').value;
      const bookId = document.getElementById('select-issue-book').value;

      if (!memberId || !bookId) {
        showToast("Incomplete", "Please pick a student and a book.");
        return;
      }

      const member = state.members.find(m => m.id === memberId);
      const book = state.books.find(b => b.id === bookId);

      // Check 1: Blocked
      if (member.status === 'Blocked') {
        showToast("Lending Blocked", `${member.name} is currently blocked from borrowing.`);
        return;
      }

      // Check 2: Max 3 books
      const activeCount = state.transactions.filter(t => t.memberId === memberId && t.status === 'Active').length;
      if (activeCount >= 3) {
        showToast("Limit Reached", `${member.name} already holds ${activeCount} active books (max 3).`);
        return;
      }

      // Check 3: Overdue
      const today = new Date().toISOString().split('T')[0];
      const hasOverdue = state.transactions.some(t => t.memberId === memberId && t.status === 'Active' && t.dueDate < today);
      if (hasOverdue) {
        showToast("Overdue Holds", `${member.name} has overdue returns. Return them first.`);
        return;
      }

      // Check 4: Unpaid Fines
      const unpaid = state.fines.filter(f => f.memberId === memberId && f.status === 'Unpaid');
      if (unpaid.length > 0) {
        showToast("Fines Pending", `${member.name} owes unpaid penalties. Settle them first.`);
        return;
      }

      // Check 5: Copies > 0
      if (book.availableCopies <= 0) {
        showToast("Stock Out", `All copies of "${book.title}" are borrowed.`);
        return;
      }

      const dueObj = new Date();
      dueObj.setDate(dueObj.getDate() + 14);

      state.transactions.unshift({
        id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
        bookId: book.id,
        bookTitle: book.title,
        memberId: member.id,
        memberName: member.name,
        issueDate: today,
        dueDate: dueObj.toISOString().split('T')[0],
        returnDate: null,
        renewCount: 0,
        status: 'Active'
      });

      book.availableCopies--;
      book.timesBorrowed = (book.timesBorrowed || 0) + 1;

      saveState();
      showToast("Issued", `"${book.title}" issued to ${member.name}.`);
      document.getElementById('form-issue-book').reset();
      renderIssueReturn();
      renderDashboard();
    });

    function processReturn(txId) {
      const tx = state.transactions.find(t => t.id === txId);
      if (!tx || tx.status !== 'Active') return;

      const today = new Date().toISOString().split('T')[0];
      tx.status = 'Returned';
      tx.returnDate = today;

      const book = state.books.find(b => b.id === tx.bookId);
      if (book) {
        book.availableCopies = Math.min(book.totalCopies, book.availableCopies + 1);
      }

      const diffDays = Math.ceil((new Date(today) - new Date(tx.dueDate)) / 86400000);
      if (diffDays > 0) {
        const fineAmt = diffDays * 2;
        state.fines.unshift({
          id: `FINE-${Math.floor(100 + Math.random() * 900)}`,
          txId: tx.id,
          memberId: tx.memberId,
          memberName: tx.memberName,
          bookTitle: tx.bookTitle,
          daysLate: diffDays,
          amount: fineAmt,
          status: 'Unpaid'
        });
        showToast("Late Return", `Returned ${diffDays} day(s) late. ₹${fineAmt} fine levied.`);
      } else {
        showToast("Returned", `"${tx.bookTitle}" returned on time.`);
      }

      saveState();
      renderIssueReturn();
      renderDashboard();
    }

    function processRenewal(txId) {
      const tx = state.transactions.find(t => t.id === txId);
      if (!tx || tx.status !== 'Active') return;

      const today = new Date().toISOString().split('T')[0];
      if (tx.dueDate < today) {
        showToast("Blocked", "Cannot extend an overdue book. Return it first.");
        return;
      }

      if ((tx.renewCount || 0) >= 2) {
        showToast("Max Extensions", "Loan already extended twice (limit reached).");
        return;
      }

      const d = new Date(tx.dueDate);
      d.setDate(d.getDate() + 7);
      tx.dueDate = d.toISOString().split('T')[0];
      tx.renewCount = (tx.renewCount || 0) + 1;

      saveState();
      showToast("Extended", `Due date set to ${tx.dueDate} (${tx.renewCount}/2).`);
      renderIssueReturn();
    }

    // --- 9. OVERDUE & FINES ---
    function renderOverdue() {
      const tbody = document.getElementById('overdue-table-body');
      const today = new Date().toISOString().split('T')[0];
      const overdue = state.transactions.filter(t => t.status === 'Active' && t.dueDate < today);
      overdue.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

      if (overdue.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:2rem; color:var(--accent-green);">🎉 No overdue books right now!</td></tr>`;
        return;
      }

      tbody.innerHTML = overdue.map(tx => {
        const days = Math.ceil((new Date(today) - new Date(tx.dueDate)) / 86400000);
        const fine = days * 2;
        return `
          <tr>
            <td><strong>${escapeHTML(tx.memberName)}</strong></td>
            <td>${escapeHTML(tx.bookTitle)}</td>
            <td style="color:var(--accent-red); font-weight:700;">${escapeHTML(tx.dueDate)}</td>
            <td><span class="status-badge status-out">${days} days</span></td>
            <td style="color:var(--accent-red); font-weight:700;">₹${fine}</td>
            <td>
              <button class="btn-action-secondary" style="padding:0.35rem 0.65rem; font-size:0.75rem;" onclick="showToast('Reminder Sent', 'Alerted ${escapeHTML(tx.memberName)}.')">
                📢 Remind
              </button>
            </td>
          </tr>
        `;
      }).join('');
    }

    function renderFines() {
      const tbody = document.getElementById('fines-table-body');
      const paid = state.fines.filter(f => f.status === 'Paid').reduce((a, b) => a + b.amount, 0);
      const pending = state.fines.filter(f => f.status === 'Unpaid').reduce((a, b) => a + b.amount, 0);

      document.getElementById('fines-paid-sum').textContent = `₹${paid}`;
      document.getElementById('fines-pending-sum').textContent = `₹${pending}`;

      if (state.fines.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:2rem;">No fines recorded.</td></tr>`;
        return;
      }

      tbody.innerHTML = state.fines.map(f => `
        <tr>
          <td style="font-family:monospace; color:var(--libro-purple-primary); font-weight:700;">${escapeHTML(f.id)}</td>
          <td>${escapeHTML(f.memberName)}</td>
          <td>${escapeHTML(f.bookTitle)}</td>
          <td>${f.daysLate}d</td>
          <td style="font-weight:700; color:${f.status === 'Unpaid' ? 'var(--accent-red)' : 'var(--accent-green)'};">₹${f.amount}</td>
          <td><span class="status-badge ${f.status === 'Paid' ? 'status-available' : 'status-out'}">${escapeHTML(f.status)}</span></td>
          <td>
            ${f.status === 'Unpaid' ? `
              <button class="btn-action-primary" style="padding:0.35rem 0.65rem; font-size:0.75rem;" onclick="settleFine('${f.id}')">Mark Paid</button>
            ` : `<span style="font-size:0.75rem; color:var(--accent-green);">Settled</span>`}
          </td>
        </tr>
      `).join('');
    }

    function settleFine(id) {
      const f = state.fines.find(x => x.id === id);
      if (!f) return;
      f.status = 'Paid';
      saveState();
      showToast("Settled", `Marked fine ${id} (₹${f.amount}) as cleared.`);
      renderFines();
    }

    // --- 10. REPORTS & EXPORTS ---
    function renderReports() {
      const container = document.getElementById('most-borrowed-container');
      const sorted = [...state.books].sort((a, b) => (b.timesBorrowed || 0) - (a.timesBorrowed || 0)).slice(0, 5);

      container.innerHTML = sorted.map((b, i) => `
        <div style="display:flex; justify-content:space-between; align-items:center; background:#f8fafc; border:1px solid var(--card-border); padding:0.6rem 0.85rem; border-radius:var(--radius-sm);">
          <div>
            <strong style="font-size:0.85rem; color:var(--text-heading);">#${i + 1} ${escapeHTML(b.title)}</strong>
            <div style="font-size:0.72rem; color:var(--text-muted);">${escapeHTML(b.category)} &bull; ${escapeHTML(b.author)}</div>
          </div>
          <span class="status-badge status-available">${b.timesBorrowed || 0} loans</span>
        </div>
      `).join('');
    }

    function downloadCSV(filename, headers, rows) {
      const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast("CSV Downloaded", filename);
    }

    function exportBooksCSV() {
      const headers = ['ID', 'Title', 'Author', 'ISBN', 'Category', 'Shelf', 'Total', 'Available'];
      const rows = state.books.map(b => [`"${b.id}"`, `"${b.title}"`, `"${b.author}"`, `"${b.isbn}"`, `"${b.category}"`, `"${b.shelf}"`, b.totalCopies, b.availableCopies]);
      downloadCSV(`libro_books_${todayStr}.csv`, headers, rows);
    }

    function exportMembersCSV() {
      const headers = ['ID', 'Name', 'Email', 'Phone', 'Joined', 'Status'];
      const rows = state.members.map(m => [`"${m.id}"`, `"${m.name}"`, `"${m.email}"`, `"${m.phone}"`, `"${m.joinedDate}"`, `"${m.status}"`]);
      downloadCSV(`libro_students_${todayStr}.csv`, headers, rows);
    }

    function exportLoansCSV() {
      const headers = ['TX ID', 'Book', 'Student', 'Issue Date', 'Due Date', 'Status'];
      const rows = state.transactions.map(t => [`"${t.id}"`, `"${t.bookTitle}"`, `"${t.memberName}"`, `"${t.issueDate}"`, `"${t.dueDate}"`, `"${t.status}"`]);
      downloadCSV(`libro_loans_${todayStr}.csv`, headers, rows);
    }

    function backupJSON() {
      const str = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
      const a = document.createElement('a');
      a.href = str;
      a.download = `libro_backup_${todayStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast("Backup Saved", "Database snapshot downloaded as JSON.");
    }

    // --- 11. MODAL HELPERS ---
    function openModal(id) {
      const el = document.getElementById(id);
      if (el) el.classList.add('active');
    }
    function closeModal(id) {
      const el = document.getElementById(id);
      if (el) el.classList.remove('active');
    }
    document.querySelectorAll('.modal-backdrop-overlay').forEach(m => {
      m.addEventListener('click', (e) => {
        if (e.target === m) m.classList.remove('active');
      });
    });

    function renderAll() {
      renderDashboard();
      renderBooks();
      renderStudents();
      renderIssueReturn();
      renderOverdue();
      renderFines();
      renderReports();
    }

    function escapeHTML(str) {
      if (!str && str !== 0) return '';
      return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    document.addEventListener('DOMContentLoaded', () => {
      loadState();
      initAuth();
      renderAll();
    });