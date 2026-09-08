function FindProxyForURL(url, host) {
    if (host == "mitm.it") {
        return "PROXY 192.168.1.8:8080; DIRECT";
    }
    if (dnsDomainIs(host, "nz.ua") || shExpMatch(host, "*.nz.ua")) {
        return "PROXY 192.168.1.8:8080; DIRECT";
    }
    return "DIRECT";
}
