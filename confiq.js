// config.js - Konfigurasi Utama Sistem Absensi Shalat

// ========================================
// KONFIGURASI SEKOLAH
// ========================================
const SCHOOL_CONFIG = {
    name: "UPT SMAN 21 GOWA",
    address: "JL. POROS PATTALLASSANG",
    phone: "+62 856 9669 1960",
    email: "ppdb@sman21gowa.sch.id",
    logo: "images/logo-sekolah.png",
    academicYear: "2025/2026"
};

// ========================================
// KONFIGURASI WAKTU SHALAT
// ========================================
const PRAYER_TIMES = {
    subuh: {
        name: "Subuh",
        time: "04:30",
        arabicName: "الفجر",
        description: "Shalat Subuh - Fajar"
    },
    dhuhur: {
        name: "Dhuhur", 
        time: "12:15",
        arabicName: "الظهر",
        description: "Shalat Dhuhur - Tengah Hari"
    },
    ashar: {
        name: "Ashar",
        time: "15:30", 
        arabicName: "العصر",
        description: "Shalat Ashar - Sore"
    },
    maghrib: {
        name: "Maghrib",
        time: "18:15",
        arabicName: "المغرب", 
        description: "Shalat Maghrib - Petang"
    },
    isya: {
        name: "Isya",
        time: "19:30",
        arabicName: "العشاء",
        description: "Shalat Isya - Malam"
    }
};

// ========================================
// KONFIGURASI KELAS
// ========================================
const CLASS_CONFIG = {
    grades: {
        "XII": {
            name: "Kelas XII",
            classes: ["XII MIPA 1", "XII MIPA 2", "XII MIPA 3"],
            maxStudents: 36
        },
        "8": {
            name: "Kelas 8", 
            classes: ["8A", "8B", "8C", "8D"],
            maxStudents: 30
        },
        "9": {
            name: "Kelas 9",
            classes: ["9A", "9B", "9C", "9D"], 
            maxStudents: 30
        }
    },
    getAllClasses: function() {
        let allClasses = [];
        Object.values(this.grades).forEach(grade => {
            allClasses = allClasses.concat(grade.classes);
        });
        return allClasses;
    }
};

// ========================================
// KONFIGURASI BARCODE SCANNER
// ========================================
const SCANNER_CONFIG = {
    // Format barcode yang didukung
    supportedFormats: [
        "code_128_reader",
        "ean_reader", 
        "ean_8_reader",
        "code_39_reader",
        "code_93_reader",
        "codabar_reader"
    ],
    
    // Pengaturan kamera
    camera: {
        preferredFacing: "environment", // "user" untuk kamera depan
        resolution: {
            width: 640,
            height: 480
        }
    },
    
    // Pengaturan deteksi
    detection: {
        frequency: 10,           // Frekuensi scan per detik
        minConfidence: 0.8,      // Minimum confidence level
        attempts: 5,             // Jumlah percobaan sebelum gagal
        timeout: 30000           // Timeout dalam ms (30 detik)
    },
    
    // Audio feedback
    audio: {
        enabled: true,
        successSound: true,
        errorSound: true,
        volume: 0.5
    }
};

// ========================================
// KONFIGURASI BARCODE GENERATOR
// ========================================
const BARCODE_CONFIG = {
    format: "CODE128",           // Format barcode default
    width: 2,                    // Lebar garis barcode
    height: 60,                  // Tinggi barcode
    displayValue: false,         // Tampilkan nilai di bawah barcode
    fontSize: 14,                // Ukuran font untuk nilai
    textAlign: "center",         // Alignment text
    textPosition: "bottom",      // Posisi text
    textMargin: 2,              // Margin text
    margin: 5,                  // Margin barcode
    background: "#ffffff",       // Warna background
    lineColor: "#000000",       // Warna garis barcode
    
    // Prefix untuk ID siswa
    studentIdPrefix: "STD",
    
    // Panjang ID unik
    idLength: 8,
    
    // Generate Student ID
    generateStudentId: function(name, nis, className) {
        const nameCode = name.substring(0, 3).toUpperCase().replace(/\s/g, '');
        const classCode = className.replace(/\s/g, '');
        const nisCode = nis.toString().slice(-3);
        const randomCode = Math.floor(Math.random() * 99).toString().padStart(2, '0');
        
        return `${this.studentIdPrefix}${nameCode}${classCode}${nisCode}${randomCode}`;
    }
};

// ========================================
// KONFIGURASI DATABASE SIMULASI
// ========================================
const DATABASE_CONFIG = {
    // Storage keys untuk localStorage
    storageKeys: {
        students: "absensi_students_data",
        attendance: "absensi_attendance_data", 
        settings: "absensi_settings_data",
        reports: "absensi_reports_data"
    },
    
    // Auto-save interval (dalam ms)
    autoSaveInterval: 30000, // 30 detik
    
    // Backup settings
    backup: {
        enabled: true,
        maxBackups: 10,
        backupPrefix: "absensi_backup_"
    },
    
    // Data validation
    validation: {
        maxStudentNameLength: 50,
        maxNISLength: 20,
        requiredFields: ["name", "class", "nis"],
        nisPattern: /^[0-9]+$/
    }
};

// ========================================
// KONFIGURASI UI/UX
// ========================================
const UI_CONFIG = {
    // Theme colors
    colors: {
        primary: "#667eea",
        secondary: "#764ba2", 
        success: "#27ae60",
        warning: "#f39c12",
        error: "#e74c3c",
        info: "#3498db"
    },
    
    // Animation settings
    animations: {
        fadeInDuration: 300,
        slideInDuration: 500,
        scaleInDuration: 200,
        pulseInterval: 1000
    },
    
    // Modal settings
    modal: {
        backdropBlur: true,
        closeOnBackdropClick: true,
        showCloseButton: true,
        autoCloseDelay: 3000 // untuk alert modals
    },
    
    // Table/List settings
    table: {
        itemsPerPage: 20,
        showPagination: true,
        sortable: true,
        searchable: true
    },
    
    // Alert settings
    alerts: {
        autoClose: true,
        duration: 5000,
        position: "top-right",
        maxAlerts: 3
    }
};

// ========================================
// KONFIGURASI LAPORAN
// ========================================
const REPORT_CONFIG = {
    // Format export yang didukung
    exportFormats: ["pdf", "excel", "csv"],
    
    // Template laporan
    templates: {
        daily: {
            name: "Laporan Harian",
            columns: ["nama", "kelas", "nis", "waktu_shalat", "status", "waktu_absen"],
            groupBy: "waktu_shalat"
        },
        weekly: {
            name: "Laporan Mingguan", 
            columns: ["nama", "kelas", "total_hadir", "total_alpha", "persentase"],
            groupBy: "kelas"
        },
        monthly: {
            name: "Laporan Bulanan",
            columns: ["nama", "kelas", "nis", "total_hadir", "total_alpha", "persentase"],
            groupBy: "kelas"
        },
        student: {
            name: "Laporan Per Siswa",
            columns: ["tanggal", "waktu_shalat", "status", "waktu_absen"],
            groupBy: "tanggal"
        }
    },
    
    // Pengaturan PDF
    pdf: {
        pageSize: "A4",
        orientation: "portrait",
        margins: {
            top: 20,
            right: 20, 
            bottom: 20,
            left: 20
        },
        fonts: {
            title: { size: 16, weight: "bold" },
            header: { size: 12, weight: "bold" },
            body: { size: 10, weight: "normal" }
        }
    }
};

// ========================================
// KONFIGURASI NOTIFIKASI
// ========================================
const NOTIFICATION_CONFIG = {
    // Jenis notifikasi
    types: {
        success: { icon: "✅", color: "#27ae60", sound: "success.mp3" },
        error: { icon: "❌", color: "#e74c3c", sound: "error.mp3" },
        warning: { icon: "⚠️", color: "#f39c12", sound: "warning.mp3" },
        info: { icon: "ℹ️", color: "#3498db", sound: "info.mp3" }
    },
    
    // Pengaturan push notification (jika didukung browser)
    push: {
        enabled: false,
        requestPermission: true,
        vapidKey: "", // Untuk Web Push
        serviceWorker: "sw.js"
    },
    
    // Notifikasi reminder waktu shalat
    prayerReminder: {
        enabled: true,
        minutesBefore: 5, // Remind 5 menit sebelum waktu shalat
        sound: true,
        message: "Waktu shalat akan dimulai dalam {minutes} menit"
    }
};

// ========================================
// KONFIGURASI KEAMANAN
// ========================================
const SECURITY_CONFIG = {
    // Session management
    session: {
        timeout: 8 * 60 * 60 * 1000, // 8 jam dalam ms
        checkInterval: 60000, // Check setiap 1 menit
        warningTime: 10 * 60 * 1000 // Warning 10 menit sebelum timeout
    },
    
    // Rate limiting untuk scanning
    rateLimit: {
        maxScansPerMinute: 10,
        blockDuration: 60000, // Block selama 1 menit jika exceeded
        whitelist: [] // IP yang dikecualikan dari rate limit
    },
    
    // Data validation
    validation: {
        sanitizeInput: true,
        maxInputLength: 100,
        allowedCharacters: /^[a-zA-Z0-9\s\-\.\_]+$/,
        sqlInjectionProtection: true
    },
    
    // Admin access
    admin: {
        requireAuth: false, // Set true untuk production
        defaultPassword: "admin123", // Ganti untuk production!
        sessionDuration: 2 * 60 * 60 * 1000, // 2 jam
        maxLoginAttempts: 3,
        lockoutDuration: 15 * 60 * 1000 // 15 menit
    }
};

// ========================================
// KONFIGURASI PERFORMA
// ========================================
const PERFORMANCE_CONFIG = {
    // Caching
    cache: {
        enabled: true,
        maxSize: 50, // MB
        ttl: 24 * 60 * 60 * 1000, // 24 jam
        keys: ["students", "attendance", "reports"]
    },
    
    // Lazy loading
    lazyLoad: {
        images: true,
        components: true,
        threshold: 0.1 // Intersection observer threshold
    },
    
    // Debouncing
    debounce: {
        search: 300, // ms
        save: 1000,  // ms
        resize: 100  // ms
    },
    
    // Virtual scrolling untuk list besar
    virtualScroll: {
        enabled: true,
        itemHeight: 60,
        bufferSize: 10
    }
};

// ========================================
// UTILITY FUNCTIONS
// ========================================
const CONFIG_UTILS = {
    // Get current prayer time
    getCurrentPrayerTime: function() {
        const now = new Date();
        const currentTime = now.getHours() * 100 + now.getMinutes();
        
        const times = PRAYER_TIMES;
        const timeValues = {
            subuh: this.timeToMinutes(times.subuh.time),
            dhuhur: this.timeToMinutes(times.dhuhur.time),
            ashar: this.timeToMinutes(times.ashar.time),
            maghrib: this.timeToMinutes(times.maghrib.time),
            isya: this.timeToMinutes(times.isya.time)
        };
        
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        
        if (currentMinutes >= timeValues.subuh && currentMinutes < timeValues.dhuhur) {
            return "subuh";
        } else if (currentMinutes >= timeValues.dhuhur && currentMinutes < timeValues.ashar) {
            return "dhuhur";
        } else if (currentMinutes >= timeValues.ashar && currentMinutes < timeValues.maghrib) {
            return "ashar";
        } else if (currentMinutes >= timeValues.maghrib && currentMinutes < timeValues.isya) {
            return "maghrib";
        } else {
            return "isya";
        }
    },
    
    // Convert time string to minutes
    timeToMinutes: function(timeString) {
        const [hours, minutes] = timeString.split(':').map(Number);
        return hours * 60 + minutes;
    },
    
    // Format time for display
    formatTime: function(date) {
        return date.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    },
    
    // Format date for display
    formatDate: function(date) {
        return date.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },
    
    // Get next prayer time
    getNextPrayerTime: function() {
        const current = this.getCurrentPrayerTime();
        const prayerOrder = ['subuh', 'dhuhur', 'ashar', 'maghrib', 'isya'];
        const currentIndex = prayerOrder.indexOf(current);
        
        if (currentIndex === -1 || currentIndex === prayerOrder.length - 1) {
            return 'subuh'; // Next day's Subuh
        }
        
        return prayerOrder[currentIndex + 1];
    },
    
    // Calculate time until next prayer
    getTimeUntilNextPrayer: function() {
        const nextPrayer = this.getNextPrayerTime();
        const now = new Date();
        const nextPrayerTime = PRAYER_TIMES[nextPrayer].time;
        const [hours, minutes] = nextPrayerTime.split(':').map(Number);
        
        const nextPrayerDate = new Date();
        nextPrayerDate.setHours(hours, minutes, 0, 0);
        
        // If next prayer is tomorrow (for Subuh after Isya)
        if (nextPrayer === 'subuh' && now.getHours() >= 19) {
            nextPrayerDate.setDate(nextPrayerDate.getDate() + 1);
        }
        
        const timeDiff = nextPrayerDate - now;
        const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        
        return {
            prayer: nextPrayer,
            hours: hoursLeft,
            minutes: minutesLeft,
            total: timeDiff
        };
    },
    
    // Validate student data
    validateStudentData: function(data) {
        const validation = DATABASE_CONFIG.validation;
        const errors = [];
        
        // Check required fields
        validation.requiredFields.forEach(field => {
            if (!data[field] || data[field].trim() === '') {
                errors.push(`Field ${field} wajib diisi`);
            }
        });
        
        // Check name length
        if (data.name && data.name.length > validation.maxStudentNameLength) {
            errors.push(`Nama tidak boleh lebih dari ${validation.maxStudentNameLength} karakter`);
        }
        
        // Check NIS format
        if (data.nis && !validation.nisPattern.test(data.nis)) {
            errors.push('NIS harus berupa angka');
        }
        
        // Check NIS length
        if (data.nis && data.nis.length > validation.maxNISLength) {
            errors.push(`NIS tidak boleh lebih dari ${validation.maxNISLength} karakter`);
        }
        
        // Check class validity
        if (data.class && !CLASS_CONFIG.getAllClasses().includes(data.class)) {
            errors.push('Kelas tidak valid');
        }
        
        return {
            isValid: errors.length === 0,
            errors: errors
        };
    },
    
    // Generate unique ID
    generateUniqueId: function() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },
    
    // Storage helpers
    saveToStorage: function(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving to storage:', error);
            return false;
        }
    },
    
    loadFromStorage: function(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (error) {
            console.error('Error loading from storage:', error);
            return defaultValue;
        }
    },
    
    // Clear storage
    clearStorage: function(key = null) {
        try {
            if (key) {
                localStorage.removeItem(key);
            } else {
                // Clear all app-related storage
                Object.values(DATABASE_CONFIG.storageKeys).forEach(storageKey => {
                    localStorage.removeItem(storageKey);
                });
            }
            return true;
        } catch (error) {
            console.error('Error clearing storage:', error);
            return false;
        }
    }
};

// ========================================
// DEVELOPMENT & DEBUG CONFIGURATION
// ========================================
const DEBUG_CONFIG = {
    enabled: true, // Set false untuk production
    level: "info", // "error", "warn", "info", "debug"
    showPerformance: true,
    showNetworkRequests: true,
    mockData: true,
    
    // Console styling
    styles: {
        error: "color: #e74c3c; font-weight: bold;",
        warn: "color: #f39c12; font-weight: bold;",
        info: "color: #3498db; font-weight: bold;",
        debug: "color: #95a5a6;",
        success: "color: #27ae60; font-weight: bold;"
    },
    
    // Mock students data for testing
    mockStudents: [
        { name: "Ahmad Rizki", class: "9A", nis: "12345" },
        { name: "Siti Nurhaliza", class: "8B", nis: "12346" },
        { name: "Muhammad Fadil", class: "7A", nis: "12347" },
        { name: "Fatimah Az-Zahra", class: "9B", nis: "12348" },
        { name: "Ali Hassan", class: "8A", nis: "12349" },
        { name: "Khadijah Aminah", class: "7C", nis: "12350" },
        { name: "Omar Abdullah", class: "9C", nis: "12351" },
        { name: "Maryam Salsabila", class: "8C", nis: "12352" },
        { name: "Ibrahim Khalil", class: "7B", nis: "12353" },
        { name: "Aisyah Rahmah", class: "9A", nis: "12354" }
    ],
    
    // Debug helper functions
    log: function(level, message, data = null) {
        if (!this.enabled) return;
        
        const levelPriority = { error: 0, warn: 1, info: 2, debug: 3 };
        const currentLevelPriority = levelPriority[this.level] || 2;
        const messageLevelPriority = levelPriority[level] || 2;
        
        if (messageLevelPriority <= currentLevelPriority) {
            const style = this.styles[level] || "";
            const timestamp = new Date().toLocaleTimeString();
            
            console.log(
                `%c[${timestamp}] [${level.toUpperCase()}] ${message}`,
                style
            );
            
            if (data) {
                console.log(data);
            }
        }
    },
    
    // Performance monitoring
    startTimer: function(label) {
        if (this.enabled && this.showPerformance) {
            console.time(label);
        }
    },
    
    endTimer: function(label) {
        if (this.enabled && this.showPerformance) {
            console.timeEnd(label);
        }
    }
};

// ========================================
// EXPORT CONFIGURATION
// ========================================
// Untuk environment yang mendukung modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SCHOOL_CONFIG,
        PRAYER_TIMES,
        CLASS_CONFIG,
        SCANNER_CONFIG,
        BARCODE_CONFIG,
        DATABASE_CONFIG,
        UI_CONFIG,
        REPORT_CONFIG,
        NOTIFICATION_CONFIG,
        SECURITY_CONFIG,
        PERFORMANCE_CONFIG,
        CONFIG_UTILS,
        DEBUG_CONFIG
    };
}

// ========================================
// INITIALIZATION
// ========================================
// Auto-initialize configuration when loaded
document.addEventListener('DOMContentLoaded', function() {
    // Log configuration loaded
    if (DEBUG_CONFIG.enabled) {
        DEBUG_CONFIG.log('info', 'Konfigurasi sistem berhasil dimuat');
        DEBUG_CONFIG.log('info', `Sekolah: ${SCHOOL_CONFIG.name}`);
        DEBUG_CONFIG.log('info', `Tahun Ajaran: ${SCHOOL_CONFIG.academicYear}`);
        DEBUG_CONFIG.log('info', `Total Kelas: ${CLASS_CONFIG.getAllClasses().length}`);
    }
    
    // Initialize prayer time display if element exists
    const currentPrayerElement = document.getElementById('current-prayer');
    if (currentPrayerElement) {
        const currentPrayer = CONFIG_UTILS.getCurrentPrayerTime();
        currentPrayerElement.textContent = PRAYER_TIMES[currentPrayer].name;
    }
    
    // Setup auto-save if enabled
    if (DATABASE_CONFIG.autoSaveInterval > 0) {
        setInterval(() => {
            // Auto-save logic would go here
            if (DEBUG_CONFIG.enabled) {
                DEBUG_CONFIG.log('debug', 'Auto-save triggered');
            }
        }, DATABASE_CONFIG.autoSaveInterval);
    }
    
    // Initialize mock data if in debug mode
    if (DEBUG_CONFIG.enabled && DEBUG_CONFIG.mockData) {
        const savedStudents = CONFIG_UTILS.loadFromStorage(DATABASE_CONFIG.storageKeys.students);
        if (!savedStudents || savedStudents.length === 0) {
            CONFIG_UTILS.saveToStorage(DATABASE_CONFIG.storageKeys.students, DEBUG_CONFIG.mockStudents);
            DEBUG_CONFIG.log('info', 'Mock data siswa berhasil dimuat');
        }
    }
});

// ========================================
// GLOBAL ERROR HANDLER
// ========================================
window.addEventListener('error', function(event) {
    if (DEBUG_CONFIG.enabled) {
        DEBUG_CONFIG.log('error', 'JavaScript Error:', {
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            error: event.error
        });
    }
});

// ========================================
// PERFORMANCE MONITORING
// ========================================
if (PERFORMANCE_CONFIG.cache.enabled && 'performance' in window) {
    window.addEventListener('load', function() {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (DEBUG_CONFIG.enabled && DEBUG_CONFIG.showPerformance) {
            DEBUG_CONFIG.log('info', 'Performance Metrics:', {
                'Load Time': Math.round(perfData.loadEventEnd - perfData.fetchStart) + 'ms',
                'DOM Ready': Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart) + 'ms',
                'First Paint': Math.round(perfData.responseStart - perfData.fetchStart) + 'ms'
            });
        }
    });
}