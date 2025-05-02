(function(apiKey){
    (function(p, e, n, d, o) {
        var v, w, x, y, z;
        o = p[d] = p[d] || {};
        o._q = o._q || [];
        v = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track'];
        for (w = 0, x = v.length; w < x; ++w)(function(m) {
            o[m] = o[m] || function() {
                o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0)));
            };
        })(v[w]);
        y = e.createElement(n);
        y.async = true;
        y.src = 'https://cdn.pendo.io/agent/static/' + apiKey + '/pendo.js';
        z = e.getElementsByTagName(n)[0];
        z.parentNode.insertBefore(y, z);
    })(window, document, 'script', 'pendo');

    // Initialize Pendo with visitor and account metadata
    pendo.initialize({
        visitor: {
            id: "Omer.Wexler@test.com",
            email: "Omer.Wexler@test.com",
            full_name: "Omer Wexler",
            role: "Admin"
        },
        account: {
            id: 35234523,
            name: "Pendo"
        },
        parentAccount: {
            id: 32423423423
        }
    });
})('3095dbb2-5f48-4407-4426-ff7e3c436359');
