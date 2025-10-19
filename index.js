document.addEventListener("DOMContentLoaded", function () {
    const itemLoading = document.querySelector(".item_Loading");
    const loadingText = document.querySelector(".container_Loading span");
    const btnLove = document.querySelector(".btn_love");
    const messageLoading = document.querySelector(".message_loading_item");

    let percent = 0;
    let duration = 7000; // 4 giây
    let intervalTime = duration / 100; // Thời gian cập nhật mỗi 1%

    // Hàm cập nhật % và width
    let loadingInterval = setInterval(() => {
        percent++;
        itemLoading.style.width = percent + "%";
        loadingText.textContent = percent + "%";

        // Khi đạt 60% đổi nội dung thành "sắp xong rồi"
        if (percent === 50) {
            loadingText.style.color = "#ffffff";
        }
        if (percent === 60) {
            messageLoading.textContent = "Sắp xong rồi...";
        }

        // Khi đạt 100%, thêm hiệu ứng lắc, ẩn text và hiển thị nút
        if (percent >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingText.textContent = "Ok rùi đó:)";
            }, 300)


            setTimeout(() => {
                // Bắt đầu hiệu ứng thụt xuống
                btnLove.classList.add("animate");

                setTimeout(() => {
                    // Gỡ bỏ class message_loading khi thụt xuống
                    btnLove.classList.remove("message_loading");
                }, 300);

            }, 800);
        }
    }, intervalTime);
});
