let btn = document.getElementById("downloadBtn");
let progressContainer = document.getElementById("progressContainer");
let progressBar = document.getElementById("progressBar");
let status = document.getElementById("status");

btn.addEventListener("click", () => {
    progressContainer.style.display = "block";
    status.textContent = "Đang tải xuống...";
    btn.disabled = true;

    let width = 0;
    let fakeDownload = setInterval(() => {
        if (width >= 100) {
            clearInterval(fakeDownload);
            status.textContent = "Tải xong! Đang mở link tải...";
            btn.textContent = "Đang mở...";

            // 🔽 Mở link tải thật tại đây
            setTimeout(() => {
                window.location.href = "https://drive.google.com/file/d/1DYbiiMGPD-HOLIbg_7jH1KrhC14quVEr/view?usp=sharing";
            }, 500);

        } else {
            width += 2;
            progressBar.style.width = width + "%";
        }
    }, 80);
});
