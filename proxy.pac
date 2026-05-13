function FindProxyForURL(url, host) {
    // Если папа заходит на nz.ua (любой поддомен)
    if (shExpMatch(host, "*.nz.ua") || shExpMatch(host, "nz.ua")) {
        // Отправляем трафик на твой Hugging Face Space
        // Используем порт 7860, который мы открыли в Dockerfile
        return "PROXY doshuk-nz-helper.hf.space:7860; DIRECT";
    }

    // Весь остальной интернет (YouTube, новости и т.д.) идет напрямую
    // Это чтобы ничего не тормозило и не палилось
    return "DIRECT";
}
