function FindProxyForURL(url, host) {
    // Список сайтов, которые мы ТОЧНО хотим проксировать
    if (shExpMatch(host, "*.nz.ua") || shExpMatch(host, "nz.ua")) {
        return "PROXY 192.168.1.26:8080; DIRECT";
    }
    // Всё остальное идет напрямую сразу
    return "DIRECT";
}
