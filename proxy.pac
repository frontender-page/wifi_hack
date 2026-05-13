function FindProxyForURL(url, host) {
    // Нацеливаемся строго на дневник
    if (dnsDomainIs(host, "nz.ua") || shExpMatch(host, "*.nz.ua")) {
        // Используем прямой IP сервера Hugging Face
        return "PROXY 52.214.162.49:7860; DIRECT";
    }

    // Всё остальное летит мимо прокси
    return "DIRECT";
}
