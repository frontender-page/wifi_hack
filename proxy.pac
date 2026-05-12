function FindProxyForURL(url, host) {
    // Если идем на nz.ua, пробуем через ноут Кирилла
    if (shExpMatch(host, "nz.ua") || shExpMatch(host, "*.nz.ua")) {
        return "PROXY 192.168.1.26:8080; DIRECT";
    }
    // Всё остальное идет напрямую, интернет не пропадет
    return "DIRECT";
}
