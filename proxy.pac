function FindProxyForURL(url, host) {
    // 1. Сначала проверяем, не является ли это локальным адресом
    if (isPlainHostName(host) || shExpMatch(host, "*.local")) {
        return "DIRECT";
    }

    // 2. Если заходим на nz.ua (любым протоколом)
    if (dnsDomainIs(host, "nz.ua") || shExpMatch(host, "*.nz.ua")) {
        // Возвращаем прокси. 
        // Важно: если mitmproxy выключен, DIRECT позволит интернету работать.
        return "PROXY 192.168.1.26:8080; DIRECT";
    }

    // 3. Всё остальное — напрямую
    return "DIRECT";
}
