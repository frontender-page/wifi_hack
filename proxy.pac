function FindProxyForURL(url, host) {
    // Если папа заходит на nz.ua или любые поддомены (m.nz.ua и т.д.)
    if (dnsDomainIs(host, "nz.ua") || shExpMatch(host, "*.nz.ua")) {
        // Жестко требуем идти ЧЕРЕЗ МАКБУК. Никакого DIRECT на конце!
        return "PROXY 192.168.1.26:8080; DIRECT";
    }
    
    // Весь остальной интернет (Гугл, Ютуб, Новости) идет напрямую, чтобы не грузить твой ноут
    return "DIRECT";
}
