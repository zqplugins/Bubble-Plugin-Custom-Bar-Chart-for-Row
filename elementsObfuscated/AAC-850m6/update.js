function(instance, properties, context){
	(function (_0x141d02, _0x2264e0) {
    const _0x42805f = _0x4a66, _0x39e5f1 = _0x141d02();
    while (!![]) {
        try {
            const _0x6880d7 = parseInt(_0x42805f(0x1b3)) / 0x1 * (-parseInt(_0x42805f(0x1b8)) / 0x2) + parseInt(_0x42805f(0x1ac)) / 0x3 + parseInt(_0x42805f(0x1b2)) / 0x4 + -parseInt(_0x42805f(0x1bc)) / 0x5 * (parseInt(_0x42805f(0x1b0)) / 0x6) + parseInt(_0x42805f(0x1ad)) / 0x7 + parseInt(_0x42805f(0x1bb)) / 0x8 * (parseInt(_0x42805f(0x1b1)) / 0x9) + parseInt(_0x42805f(0x1bf)) / 0xa * (-parseInt(_0x42805f(0x1c0)) / 0xb);
            if (_0x6880d7 === _0x2264e0)
                break;
            else
                _0x39e5f1['push'](_0x39e5f1['shift']());
        } catch (_0x39c652) {
            _0x39e5f1['push'](_0x39e5f1['shift']());
        }
    }
}(_0x3a20, 0xb0a74));
function _0x4a66(_0xda344f, _0x41211d) {
    const _0x3a20bc = _0x3a20();
    return _0x4a66 = function (_0x4a6690, _0x3852b9) {
        _0x4a6690 = _0x4a6690 - 0x1ac;
        let _0x1737e0 = _0x3a20bc[_0x4a6690];
        return _0x1737e0;
    }, _0x4a66(_0xda344f, _0x41211d);
}
function _0x3a20() {
    const _0x42a547 = [
        '17271KIfZWR',
        '675464jbJrNa',
        '26CQJklM',
        'tooltip',
        'chart_vertical',
        'split',
        'data',
        '20018ApOcZU',
        'chart',
        'getElementById',
        '5488OGqxsG',
        '5isWPng',
        'bar',
        'barvalue',
        '1400470fyAZZB',
        '110jPgPtx',
        'bartags',
        '3431892gGZZLK',
        '4626083cthmDr',
        'horizontalBar',
        'destroy',
        '5435142agrxBZ'
    ];
    _0x3a20 = function () {
        return _0x42a547;
    };
    return _0x3a20();
}
function update(_0x3c7a52, _0x59aaa5, _0x87841d) {
    const _0x6224c1 = _0x4a66;
    _0x6224c1(0x1b9) in _0x3c7a52[_0x6224c1(0x1b7)] && _0x3c7a52[_0x6224c1(0x1b7)][_0x6224c1(0x1b9)][_0x6224c1(0x1af)]();
    const _0x334f91 = _0x3c7a52['data']['id'], _0x22c962 = document[_0x6224c1(0x1ba)](_0x334f91);
    var _0x488ba9 = _0x59aaa5['barcolor']?.[_0x6224c1(0x1b6)](','), _0x9a112f = _0x59aaa5[_0x6224c1(0x1c1)]?.[_0x6224c1(0x1b6)](','), _0x2354d1 = _0x59aaa5[_0x6224c1(0x1be)]?.[_0x6224c1(0x1b6)](',');
    const _0x597739 = new Chart(_0x22c962, {
        'type': _0x59aaa5[_0x6224c1(0x1b5)] ? _0x6224c1(0x1bd) : _0x6224c1(0x1ae),
        'data': {
            'labels': _0x9a112f,
            'datasets': [{
                    'backgroundColor': _0x488ba9,
                    'data': _0x2354d1
                }]
        },
        'options': {
            'plugins': { 'tooltip': _0x59aaa5[_0x6224c1(0x1b4)] },
            'responsive': !![],
            'maintainAspectRatio': ![],
            'indexAxis': 'y',
            'hover': { 'mode': null },
            'legend': { 'display': !0x1 },
            'scales': {
                'xAxes': [{ 'ticks': { 'beginAtZero': !![] } }],
                'yAxes': [{ 'ticks': { 'beginAtZero': !![] } }]
            }
        }
    });
    _0x3c7a52['data'][_0x6224c1(0x1b9)] = _0x597739;
}
	 update(instance, properties, context);
}