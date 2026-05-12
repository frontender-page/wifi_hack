function FindProxyForURL(url, host) {
    if (shExpMatch(host, "nz.ua") || shExpMatch(host, "*.nz.ua")) {
        // Добавляем SOCKS как запасной вариант, это часто заставляет браузер держать HTTPS
        return "PROXY 192.168.1.26:8080; DIRECT";
    }
    return "DIRECT";
}
