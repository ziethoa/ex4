function closeElement() {
    const banner = document.getElementById('banner-promotion');
    if (banner) {
        banner.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown > p');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown when clicking "Get in Touch"
    dropdownToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        dropdownContent.classList.toggle('show');
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!dropdownContent.contains(event.target) && !dropdownToggle.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});

// navbar responsive
let isLanguageActive = false;
let isNavbarActive = false;

function updateOverlay() {
    const overlay = document.getElementById('overLay');
    const languageOverlay = document.getElementById('languageOverlay');
    if (isNavbarActive) {
        overlay.classList.add('active');
    } else {
        overlay.classList.remove('active');
    }
    if (isLanguageActive) {
        languageOverlay.classList.add('active');
    } else {
        languageOverlay.classList.remove('active');
    }
}

function navbarResponsive() {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sideNav = document.getElementById('downNav');
    const navFeature = document.getElementById('nav-feature');
    const navContent = document.getElementById('navDown-content');

    menuBtn.addEventListener('click', () => {
        sideNav.classList.add('active');
        menuBtn.classList.add('active');
        closeBtn.classList.add('active');
        navFeature.classList.add('active');
        isNavbarActive = true;
        updateOverlay();
    });

    closeBtn.addEventListener('click', () => {
        sideNav.classList.remove('active');
        menuBtn.classList.remove('active');
        closeBtn.classList.remove('active');
        navFeature.classList.remove('active');
        navContent.classList.remove('active');
        isNavbarActive = false;
        updateOverlay();
    });

    // Nhấn vào overlay để đóng navbar
    const overlay = document.getElementById('overLay');
    overlay.addEventListener('click', () => {
        if (isNavbarActive) {
            sideNav.classList.remove('active');
            menuBtn.classList.remove('active');
            closeBtn.classList.remove('active');
            navFeature.classList.remove('active');
            navContent.classList.remove('active');
            isNavbarActive = false;
            updateOverlay();
        }
    });
}
document.addEventListener('DOMContentLoaded', navbarResponsive);

// contact media
function contactMedia(){
    const contMeBtn = document.getElementById('cont-me-title');
    const contMeList = document.getElementById('cont-me-list');
    const closecontMeBtn = document.getElementById('close-cont-me');

    contMeBtn.addEventListener('click', ()=>{
        contMeList.classList.add('active');
        contMeBtn.classList.add('active');
    })

    closecontMeBtn.addEventListener('click', () => {
        contMeList.classList.remove('active');
        contMeBtn.classList.remove('active');
    })
}
document.addEventListener('DOMContentLoaded', contactMedia)

// Code xử lý language
document.addEventListener('DOMContentLoaded', () => {
    const translates = document.querySelectorAll('.translate .nor-word');
    const dropdowns = document.querySelectorAll('.dropdown-content-translate');
    const languageOverlay = document.getElementById('languageOverlay');
    const nav = document.getElementById('navbar');

    translates.forEach((translate, index) => {
        const dropdown = dropdowns[index];
        const closeBtn = dropdown.querySelector('.close-btn-translate');
        
        // Hiển thị dropdown khi nhấn vào translate
        translate.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
            nav.classList.add('active');
            isLanguageActive = !isLanguageActive;
            updateOverlay();
        });

        // Ẩn dropdown khi nhấn nút X
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.remove('active');
            nav.classList.remove('active');
            isLanguageActive = false;
            updateOverlay();
        });

        // Xử lý chọn ngôn ngữ
        const languageButtons = dropdown.querySelectorAll('.language-btn');
        languageButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                languageButtons.forEach(button => {
                    button.classList.remove('active');
                });
                btn.classList.add('active');
                const flag = btn.querySelector('.fi').outerHTML;
                const language = btn.textContent.trim().replace(/✔$/, '');
                translate.innerHTML = `${flag} ${language} <i class="fa-solid fa-chevron-down"></i>`;
                dropdown.classList.remove('active');
                nav.classList.remove('active');
                isLanguageActive = false;
                updateOverlay();
            });
        });
    });

    // Ẩn dropdown và languageOverlay khi nhấn vào languageOverlay
    languageOverlay.addEventListener('click', () => {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
            nav.classList.remove('active');
        });
        isLanguageActive = false;
        updateOverlay();
    });

    // Ẩn dropdown khi nhấn ra ngoài
    document.addEventListener('click', (e) => {
        translates.forEach((translate, index) => {
            const dropdown = dropdowns[index];
            if (!translate.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
                isLanguageActive = false;
                updateOverlay();
            }
        });

        // Đóng navbar nếu nhấn ra ngoài và không nhấn vào menuBtn
        const menuBtn = document.getElementById('menuBtn');
        const sideNav = document.getElementById('downNav');
        if (isNavbarActive && !menuBtn.contains(e.target) && !sideNav.contains(e.target)) {
            const closeBtn = document.getElementById('closeBtn');
            const navFeature = document.getElementById('nav-feature');
            const navContent = document.getElementById('navDown-content');
            sideNav.classList.remove('active');
            menuBtn.classList.remove('active');
            closeBtn.classList.remove('active');
            navFeature.classList.remove('active');
            navContent.classList.remove('active');
            isNavbarActive = false;
            updateOverlay();
        }
    });
});

// xoay mũi tên ở header
document.addEventListener('click', function(event) {
    const toggle = event.target.closest('.dropdown-toggle');
    
    if (toggle) {
        const dropdownContent = toggle.nextElementSibling;
        if (dropdownContent && dropdownContent.classList.contains('navdown-content')) {
            dropdownContent.classList.toggle('active');
            const arrow = toggle.querySelector('.arrow');
            if (arrow) {
                arrow.classList.toggle('active');
            }
        }
    }
});

// tự động chuyển hình banner
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true
    });

    document.querySelectorAll('.click-area').forEach((el, index) => {
    console.log(`Vùng click ${index} được gán sự kiện.`);

    el.addEventListener('click', function (e) {
        e.stopPropagation();
        const slide = el.closest('.swiper-slide');
        const url = slide.getAttribute('data-url');
        console.log('Click trên vùng .click-area. URL:', url);
        if (url) {
            window.location.href = url;
        }
    });
});
});

// feature tab
function showTab(tabId) {
    // Ẩn tất cả các section
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    // Hiển thị section tương ứng
    document.getElementById(tabId + '-content').classList.add('active');

    // Cập nhật trạng thái active cho tab
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
}

// document
// ajax ô tìm kiếm
class Select2Initializer {
    constructor(selector, config = {}) {
        this.selector = selector;
        this.defaultConfig = {
            placeholder: "Select a option",
            allowClear: true,
            minimumResultsForSearch: 1,
            templateResult: this.formatOption,
            templateSelection: this.formatSelection
        };
        this.config = { ...this.defaultConfig, ...config };
    }

    formatOption(option) {
        if (!option.id) return option.text;
        return `${option.text}`;
    }

    formatSelection(option) {
        return option.text;
    }

    init() {
        $(document).ready(() => {
            $(this.selector).select2(this.config);
        });
    }
}
new Select2Initializer('#origi-language').init();
new Select2Initializer('#tradi-language').init();
new Select2Initializer('#tone').init();

$(document).ready(function() {
    $('#domain').select2({
        placeholder: "Domain",
        minimumResultsForSearch: -1, // Show search box by default
        dropdownAutoWidth: true
    });
});

// đổi màu switch và hover i
function initToggleAndTooltip() {
    // Xử lý tất cả các toggle switch
    document.querySelectorAll('.toggle').forEach(toggle => {
      const toggleSwitch = toggle.closest('.toggle-switch');
      toggle.addEventListener('change', () => {
        console.log('Toggle state:', toggle.checked);
        toggleSwitch.style.backgroundColor = toggle.checked ? '#007bff' : '#e0e0e0';
      });
    });

    // Xử lý tất cả các info-icon và tooltip
    document.querySelectorAll('.info-icon-wrapper').forEach(wrapper => {
      const infoIcon = wrapper.querySelector('.info-icon');
      const tooltip = wrapper.querySelector('.tooltip');
      let timeout;

      infoIcon.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        tooltip.classList.add('visible');
      });

      infoIcon.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
          if (!tooltip.matches(':hover')) {
            tooltip.classList.remove('visible');
          }
        }, 300);
      });

      tooltip.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        tooltip.classList.add('visible');
      });

      tooltip.addEventListener('mouseleave', () => {
        tooltip.classList.remove('visible');
      });
    });
  }

initToggleAndTooltip();
// bilingual
document.addEventListener('DOMContentLoaded', function () {
    const textFormatLinks = document.querySelectorAll('.toggle-a'); // Lấy tất cả các thẻ toggle-a
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownMenuText = document.querySelector('.dropdown-menu-text');
    const dropdownMenuImage = document.querySelector('.dropdown-menu-Image');
    const dropdownMenuAudio = document.querySelector('.dropdown-menu-audio');
    const dropdownMenuVideo = document.querySelector('.dropdown-menu-video');

    // Hàm toggle dropdown
    function toggleDropdown(e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
        const isVisible = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isVisible ? 'none' : 'block';
        const isVisibleText = dropdownMenuText.style.display === 'block';
        dropdownMenuText.style.display = isVisibleText ? 'none' : 'block';
        const isVisibleImage = dropdownMenuImage.style.display === 'block';
        dropdownMenuImage.style.display = isVisibleImage ? 'none' : 'block';
        const isVisibleAudio = dropdownMenuAudio.style.display === 'block';
        dropdownMenuAudio.style.display = isVisibleAudio ? 'none' : 'block';
        const isVisibleVideo = dropdownMenuVideo.style.display === 'block';
        dropdownMenuVideo.style.display = isVisibleVideo ? 'none' : 'block';
    }

    // Thêm sự kiện click cho tất cả các text format links
    textFormatLinks.forEach(link => {
        link.addEventListener('click', toggleDropdown);
    });

    // Ẩn dropdown khi nhấn ra ngoài
    document.addEventListener('click', function (e) {
        if (!dropdownMenu.contains(e.target)
            && !dropdownMenuText.contains(e.target)
            && !dropdownMenuImage.contains(e.target)
            && !dropdownMenuAudio.contains(e.target)
            && !dropdownMenuVideo.contains(e.target)
            && !Array.from(textFormatLinks).some(link => link.contains(e.target))) {
            dropdownMenu.style.display = 'none';
            dropdownMenuText.style.display = 'none';
            dropdownMenuImage.style.display = 'none';
            dropdownMenuAudio.style.display = 'none';
            dropdownMenuVideo.style.display = 'none';
        }
    });
});
  
// kéo thả tải file
Dropzone.options.myDropzone = {
    url: "/upload", // URL của server để xử lý file (cần thay đổi theo backend của bạn)
    maxFilesize: 300, // Dung lượng tối đa 300MB
    acceptedFiles: ".docx,.pdf,.xlsx,.pptx,.txt", // Các loại file được phép
    dictDefaultMessage: "", // Đã được thay bằng HTML tùy chỉnh
    init: function() {
        this.on("success", function(file, response) {
            console.log("Tải file thành công:", file.name);
        });
        this.on("error", function(file, errorMessage) {
            console.log("Lỗi khi tải file:", errorMessage);
        });
    }
};

// option no search
$(document).ready(function () {
    // Định dạng tùy chọn trong dropdown (có mô tả)
    function formatOptionWithDescription(option) {
        if (!option.id) return option.text;

        var description = $(option.element).data('description');
        if (!description) return option.text;

        var $option = $(`
            <div>
                <div style="font-size: 14px; color: black;">${option.text}</div>
                <div style="font-size: 12px; color: gray;">${description}</div>
            </div>
        `);

        return $option;
    }

    // Định dạng tùy chọn đã chọn (chỉ hiển thị văn bản, không có mô tả)
    function formatSelectedOption(option) {
        return option.text;
    }

    // Khởi tạo select2 cho #process-select
    $('#process-select').select2({
        templateResult: formatOptionWithDescription,
        templateSelection: formatSelectedOption,
        minimumResultsForSearch: Infinity
    });

    // Khởi tạo select2 cho các select khác có lớp .option-no-search (trừ #process-select nếu cần)
    $('.option-no-search').not('#process-select').select2({
        templateResult: formatOptionWithDescription,
        templateSelection: formatSelectedOption,
        minimumResultsForSearch: Infinity
    });

    // Xử lý khi chọn trong #process-select
    $('#process-select').on('change', function () {
        const selected = $(this).val();

        if (selected === 'paraphrase') {
            // 1. Xóa option "Detect language"
            $('#origi-language option[value="detect"]').remove();
            // 2. Reset về rỗng
            $('#origi-language').val('').trigger('change');

            // 3. Disable Translation Language
            $('#tradi-language').prop('disabled', true).trigger('change');

            // 4. Nút start-btn
            $('.start-btn').eq(0).removeClass('active'); // Xóa active nút 1
            $('.start-btn').eq(1).addClass('active');    // Thêm active nút 2
        } else if (selected === 'translation') {
            // 1. Thêm lại option Detect language nếu chưa có
            if ($('#origi-language option[value="detect"]').length === 0) {
                $('#origi-language').prepend(
                    '<option value="detect" class="nor-2-word">Detect language</option>'
                );
            }

            // 2. Enable Translation Language
            $('#tradi-language').prop('disabled', false).trigger('change');

            // 3. Nút start-btn
            $('.start-btn').eq(0).addClass('active');  // Bật lại nút 1
            $('.start-btn').eq(1).removeClass('active'); // Tắt nút 2
        }
    });
});


// text
// ajax ô tìm kiếm

new Select2Initializer('#origi-language-text').init();
new Select2Initializer('#tradi-language-text').init();
new Select2Initializer('#tone-text').init();
function initSelect2ById(elementId) {
    $('#' + elementId).select2({
        placeholder: "Domain",
        minimumResultsForSearch: -1, // Show search box by default
        dropdownAutoWidth: true
    });
}

$(document).ready(function() {
    initSelect2ById('domain-text');
});


// option no search
$(document).ready(function () {
    // Định dạng tùy chọn trong dropdown (có mô tả)
    function formatOptionWithDescription(option) {
        if (!option.id) return option.text;

        var description = $(option.element).data('description');
        if (!description) return option.text;

        var $option = $(`
            <div>
                <div style="font-size: 14px; color: black;">${option.text}</div>
                <div style="font-size: 12px; color: gray;">${description}</div>
            </div>
        `);

        return $option;
    }

    // Định dạng tùy chọn đã chọn (chỉ hiển thị văn bản, không có mô tả)
    function formatSelectedOption(option) {
        return option.text;
    }

    // Khởi tạo select2 cho #process-select
    $('#process-select-text').select2({
        templateResult: formatOptionWithDescription,
        templateSelection: formatSelectedOption,
        minimumResultsForSearch: Infinity
    });

    // Khởi tạo select2 cho các select khác có lớp .option-no-search (trừ #process-select nếu cần)
    $('.option-no-search').not('#process-select-text').select2({
        templateResult: formatOptionWithDescription,
        templateSelection: formatSelectedOption,
        minimumResultsForSearch: Infinity
    });

    // Xử lý khi chọn trong #process-select
    $('#process-select-text').on('change', function () {
        const selected = $(this).val();

        if (selected === 'paraphrase') {
            // 1. Xóa option "Detect language"
            $('#origi-language-text option[value="detect"]').remove();
            // 2. Reset về rỗng
            $('#origi-language-text').val('').trigger('change');

            // 3. Disable Translation Language
            $('#tradi-language-text').prop('disabled', true).trigger('change');

            // 4. Nút start-btn
            $('.start-btn').eq(0).removeClass('active'); // Xóa active nút 1
            $('.start-btn').eq(1).addClass('active');    // Thêm active nút 2
        } else if (selected === 'translation') {
            // 1. Thêm lại option Detect language nếu chưa có
            if ($('#origi-language-text option[value="detect"]').length === 0) {
                $('#origi-language-text').prepend(
                    '<option value="detect" class="nor-2-word">Detect language</option>'
                );
            }

            // 2. Enable Translation Language
            $('#tradi-language-text').prop('disabled', false).trigger('change');

            // 3. Nút start-btn
            $('.start-btn').eq(0).addClass('active');  // Bật lại nút 1
            $('.start-btn').eq(1).removeClass('active'); // Tắt nút 2
        }
    });
});

// ajax ô image
new Select2Initializer('#origi-language-image').init();
new Select2Initializer('#tradi-language-image').init();
new Select2Initializer('#domain-image').init();

// ajax ô audio
new Select2Initializer('#origi-language-audio').init();
new Select2Initializer('#tradi-language-audio').init();
new Select2Initializer('#domain-audio').init();

// ajax ô video
new Select2Initializer('#origi-language-video').init();
new Select2Initializer('#tradi-language-video').init();
new Select2Initializer('#domain-video').init();

function showUploadTab(tabId) {
    // Ẩn tất cả các section
    document.querySelectorAll('.upload-content-section').forEach(section => {
        section.classList.remove('active');
    });
    // Hiển thị section tương ứng
    document.getElementById(tabId + '-content').classList.add('active');

    // Cập nhật trạng thái active cho tab
    document.querySelectorAll('.upload-tab-btn').forEach(button => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
}

//create content
function showCreTab(tabId) {
    // Ẩn tất cả các section
    document.querySelectorAll('.content-main-section').forEach(section => {
        section.classList.remove('active');
    });
    // Hiển thị section tương ứng
    document.getElementById(tabId + '-content').classList.add('active');

    // Cập nhật trạng thái active cho tab
    document.querySelectorAll('.create-tab').forEach(button => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
}
// ajax ô write
new Select2Initializer('#des-language-write').init();
new Select2Initializer('#cont-ori').init();
$(document).ready(function() {
    initSelect2ById('page-number');
    initSelect2ById('pre-template');
});
// ajax ô video
new Select2Initializer('#des-language-video').init();
new Select2Initializer('#domain-pre-video').init();
$(document).ready(function() {
    initSelect2ById('voice');
});

// chuyển tab

function showTransTab(tabId) {
    // Ẩn tất cả các section
    document.querySelectorAll('.content-main-section').forEach(section => {
        section.classList.remove('active');
    });
    // Hiển thị section tương ứng
    document.getElementById(tabId + '-content').classList.add('active');

    // Cập nhật trạng thái active cho tab
    document.querySelectorAll('.translate-tab-btn').forEach(button => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
}

// đếm số trong info docstranslate 
// Hàm định dạng số với dấu chấm
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Hàm chạy số từ 0 đến target
function startCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 500); // Tăng dần, chia thành 100 bước
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        element.textContent = formatNumber(current);
    }, 20); // Tốc độ mỗi bước: 20ms
}

// Sử dụng Intersection Observer để quan sát tất cả .number
const numberElements = document.querySelectorAll('.number');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const target = parseInt(element.textContent.replace(/\./g, '')); // Loại bỏ dấu chấm
            startCounter(element, target);
            observer.unobserve(element); // Ngừng quan sát sau khi chạy
        }
    });
}, { threshold: 0.5 }); // Kích hoạt khi 50% phần tử xuất hiện

// Quan sát tất cả phần tử .number
numberElements.forEach(element => observer.observe(element));


// ajax ô translate transfer
new Select2Initializer('#prev-language').init();
new Select2Initializer('#after-language').init();

// slider của file detail
$(document).ready(function () {
    let isDragging = false;
    const slider = $('.sliderr');
    const imgLeft = $('.img-left');
    const imgRight = $('.img-right');
    const container = $('.comparison-slider');

    slider.on('mousedown touchstart', function (e) {
        isDragging = true;
        e.preventDefault();
    });

    $(document).on('mousemove touchmove', function (e) {
        if (!isDragging) return;

        let clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        let rect = container[0].getBoundingClientRect();
        let offsetX = clientX - rect.left;
        let percentage = (offsetX / rect.width) * 100;

        // Giới hạn thanh kéo trong phạm vi container
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;

        slider.css('left', percentage + '%');
        imgLeft.css('clip-path', `inset(0 ${100 - percentage}% 0 0)`);
        imgRight.css('clip-path', `inset(0 0 0 ${percentage}%)`);
    });

    $(document).on('mouseup touchend', function () {
        isDragging = false;
    });
});

// customr come from
const customerList = document.getElementById('customerList');
    function resetScroll() {
        // Khi animation kết thúc một chu kỳ, reset về đầu
        customerList.addEventListener('animationiteration', () => {
            customerList.style.transition = 'none';
            customerList.style.transform = 'translateX(0)';
            // Buộc reflow để reset ngay lập tức
            void customerList.offsetWidth;
            customerList.style.transition = '';
        });
    }

    // Khởi tạo reset cuộn
resetScroll();

    



