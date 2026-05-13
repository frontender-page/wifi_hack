function FindProxyForURL(url, host) {
    // 1. Прицел на школьный портал
    if (dnsDomainIs(host, "nz.ua") || shExpMatch(host, "*.nz.ua")) {
        // 2. Направляем на твой Worker (порт 80 всегда открыт)
        // ВАЖНО: Мы убираем https:// и оставляем только домен
        return "PROXY icy-sun-fffenz-fixer-worker.doshuky.workers.dev:80; DIRECT";
    }

    // 3. Остальной интернет летит напрямую
    return "DIRECT";
}
