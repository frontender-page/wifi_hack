function FindProxyForURL(url, host) {
    // Нацеливаемся строго на дневник
    if (dnsDomainIs(host, "nz.ua") || shExpMatch(host, "*.nz.ua")) {
        // ЗАМЕНИ 1.2.3.4 НА IP ТВОЕГО САЙТА (из cPanel)
        // Порт 8080 мы прописали в start_proxy.py
        return "PROXY 1.2.3.4:8080; DIRECT";
    }
    return "DIRECT";
}
