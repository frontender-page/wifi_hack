function FindProxyForURL(url, host) {
    // Пропускаем локальные адреса напрямую
    if (isPlainHostName(host) || shExpMatch(host, "*.local")) {
        return "DIRECT";
    }

    // Если идем на нз
    if (dnsDomainIs(host, "nz.ua") || shExpMatch(host, "*.nz.ua")) {
        // Мы пишем HTTPS прокси первым. Даже если mitmproxy обычный, 
        // это заставит macOS использовать метод CONNECT, который сохранит замочек.
        return "PROXY 192.168.1.26:8080; DIRECT";
    }

    return "DIRECT";
}
