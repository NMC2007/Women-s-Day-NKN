window.onload = function () {
    const letter = document.querySelector('.BGRLetter1');

    const middleLayer = document.querySelector('.layer-middle');
    const containerLetter = document.querySelector('.Container_Letter');


    const Content = document.querySelector('.ContentLetter p')


    // flag để tránh click nhiều lần
    let isOpened = false;
    

    letter.addEventListener('click', () => {
        if (isOpened) return;
        isOpened = true;
        console.log('Hello')

        // thư nhích lên trong 1s
        middleLayer.style.transition = 'bottom 1s ease-in-out';
        middleLayer.style.bottom = '70px';

        // sau khi thư nhích lên -> hiện nội dung
        setTimeout(() => {
            containerLetter.classList.remove('item-None');// gỡ bỏ ẩn
            containerLetter.classList.add('show-Letter');// thêm hiện
            
            typeWriterEffect()

        }, 1000); // đợi rút thư xong mới chạy
    });


    function typeWriterEffect () {

        const H_greeting = document.querySelector('.ContentLetter h3')
        const greetingOrigin = H_greeting.innerHTML
        H_greeting.style.opacity = 0

        Content.style.opacity = 0


        let index = 0

        setTimeout(function () {
            let interval = setInterval(() => {
                H_greeting.style.opacity = 1

                if (index < greetingOrigin.length) {
                    index++
                    H_greeting.innerHTML = greetingOrigin.substring(0, index);
                } else {
                    clearInterval(interval);
                }
            },100)
        },1000)


        displayText()
    }

    

    function displayText() {
        const ContentOrigin = Content.innerHTML;

        let index = 0

        setTimeout(function () {
            let interval = setInterval(() => {
                Content.style.opacity = 1

                if (index < ContentOrigin.length) {
                    index++
                    Content.innerHTML = ContentOrigin.substring(0, index);
                } else {
                    clearInterval(interval);
                }
            },70)
        },600)

        setTimeout(function () {
            InlineA()
        },15000)
    }

    function InlineA () {
        const giftbtn = document.querySelector('.ContentLetter a')
        giftbtn.style.display = "inline-block";
    }




    function ChuRoi() {
        const container = document.querySelector('.Container');

        const texts = [
            "Happy Women's Day",

            '♥',
            '❤️',
            '💗',
            '💓',
            '💘',
            '🧸',
            '🍓',
            '🫧',
            '🎀'

        ];

        const textsColor = [
            'rgb(255, 169, 185)',
            'rgb(255, 98, 216)',
            'rgb(255, 119, 191)',
            'rgb(255, 240, 251)'
        ];



        // chống cuộn
        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
        }, { passive: false });

        document.addEventListener('wheel', function (e) {
            e.preventDefault();
        }, { passive: false });

        document.addEventListener('gesturestart', function (e) {
            e.preventDefault();
        });

        document.addEventListener('gesturechange', function (e) {
            e.preventDefault();
        });

        document.addEventListener('gestureend', function (e) {
            e.preventDefault();
        });


        // chữ rơi
        function CreateFallingElement() {
            const el = document.createElement('div');
            el.className = 'falling';

            el.textContent = texts[Math.floor(Math.random() * texts.length)];
            el.style.color = textsColor[Math.floor(Math.random() * textsColor.length)];

            const z = Math.floor(Math.random() * 500 - 250);
            el.style.setProperty('--z-depth', `${z}px`);

            const absZ = Math.abs(z);

            let fontSize, duration, opacity;

            if (absZ > 180) {
                fontSize = Math.random() * (18 - 12) + 12;
                duration = Math.random() * 3 + 9;
                opacity = 0.5;
            } else if (absZ > 80) {
                fontSize = Math.random() * (27 - 16) + 16;
                duration = Math.random() * 3 + 7;
                opacity = 0.7;
            } else {
                fontSize = Math.random() * (35 - 20) + 20;
                duration = Math.random() * 2 + 5;
                opacity = 0.9;
            }

            const containerWidth = container.offsetWidth;
            el.style.left = Math.random() * (containerWidth) + 'px';
            el.style.top = '0px';   // Bắt đầu từ trên cùng container
            el.style.fontSize = `${fontSize}px`;
            el.style.animationDuration = `${duration}s`;
            el.style.opacity = opacity;

            el.style.transform = `translateZ(${z}px)`; // hiệu ứng chiều sâu

            container.appendChild(el);

            setTimeout(() => el.remove(), duration * 1000 + 1000);
        }


        setInterval(CreateFallingElement, 220);
    }
    ChuRoi()

};
// đã cập nhật trên github