function FindProxyForURL(url, host) {
    PROXY = "PROXY 192.168.1.47:3128"

    // Apple.com via proxy
    if (shExpMatch(host,"*.terrain.int")) {
        return PROXY;
    }
    // Everything else directly!
    return "DIRECT";
}
