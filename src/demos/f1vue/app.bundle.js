webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Driver.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Teams.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\nth[data-v-3cc3fc6a] {\n    cursor:pointer;\n}\nth.active[data-v-3cc3fc6a] {\n    color:#428bca;\n}\n.caret.reversed[data-v-3cc3fc6a] {\n    transform: rotate(180deg);\n}\n", "", {"version":3,"sources":["/Users/charlie/Documents/f1-vuejs-webpack/src/components/src/components/Drivers.vue"],"names":[],"mappings":";AA2GA;IACA,eAAA;CACA;AACA;IACA,cAAA;CACA;AACA;IACA,0BAAA;CACA","file":"Drivers.vue","sourcesContent":["<template>\n    <div class=\"drivers\">\n        <h1>Drivers &mdash; {{year}} Season</h1>\n        <div v-if=\"loading\">Loading...</div>\n        <div v-else-if=\"error\">An error has occurred. No driver data is available.</div>\n        <table class=\"table table-striped\" v-else>\n            <thead>\n                <tr>\n                    <th v-on:click=\"sortDrivers('familyName')\" :class=\"{'active': sort === 'familyName'}\">Name <span class=\"caret\" :class=\"{ 'reversed': reversed }\" v-if=\"sort === 'familyName'\"></span></th>\n                    <th v-on:click=\"sortDrivers('Constructors')\" :class=\"{'active': sort === 'Constructors'}\">Teams <span class=\"caret\" :class=\"{ 'reversed': reversed }\" v-if=\"sort === 'Constructors'\"></span></th>\n                    <th v-on:click=\"sortDrivers('nationality')\" :class=\"{'active': sort === 'nationality'}\">Nationality <span class=\"caret\" :class=\"{ 'reversed': reversed }\" v-if=\"sort === 'nationality'\"></span></th>\n                    <th v-on:click=\"sortDrivers('points')\" :class=\"{'active': sort === 'points'}\">Points <span class=\"caret\" :class=\"{ 'reversed': reversed }\" v-if=\"sort === 'points'\"></span></th>\n                    <th v-on:click=\"sortDrivers('wins')\" :class=\"{'active': sort === 'wins'}\">Wins <span class=\"caret\" :class=\"{ 'reversed': reversed }\" v-if=\"sort === 'wins'\"></span></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr v-for=\"driver in drivers\">\n                    <td><router-link :to=\"'/drivers/' + driver.Driver.driverId\"><a>{{driver.Driver.givenName + ' ' + driver.Driver.familyName}}</a></router-link></td>\n                    <td>\n                        <span v-for=\"(team, index) in driver.Constructors\">\n                            <router-link :to=\"'/teams/' + year + '/' + team.constructorId\"><a>{{team.name}}</a></router-link><span v-if=\"index+1 < driver.Constructors.length\">, </span>\n                        </span>\n                    </td>\n                    <td>{{driver.Driver.nationality}}</td>\n                    <td>{{driver.points}}</td>\n                    <td>{{driver.wins}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</template>\n\n<script>\n    export default {\n        name: 'drivers',\n        props: ['year'],\n        data: () => ({\n            drivers: [],\n            loading: true,\n            sort: 'points',\n            reversed: false,\n            error: false\n        }),\n        methods: {\n            getData() {\n                this.loading = true;\n                this.error = false;\n                this.$http.get('//ergast.com/api/f1/' + this.year + '/driverStandings.json').then(response => {\n                    this.loading = false;\n                    if (response.body.MRData.StandingsTable.StandingsLists.length > 0) {\n                        this.drivers = response.body.MRData.StandingsTable.StandingsLists[0].DriverStandings;\n                        this.sort = 'points';\n                        this.reversed = false;\n                    } else {\n                        this.error = true;\n                    }\n                }, response => {\n                    this.loading = false;\n                    this.error = true;\n                    console.log('error', response);\n                });\n            },\n            sortDrivers(property) {\n                let first, second;\n                if (this.sort === property) {\n                    this.drivers.reverse();\n                    this.reversed = !this.reversed;\n                } else {\n                    this.sort = property;\n                    this.reversed = false;\n                    this.drivers.sort((a, b) => {\n                        if (property === 'points' || property === 'wins') {\n                            first = parseInt(a[property], 10);\n                            second = parseInt(b[property], 10);\n                        } else if (property === 'Constructors') {\n                            first = a.Constructors[0].name;\n                            second = b.Constructors[0].name;\n                        } else {\n                            first = a.Driver[property].toLowerCase();\n                            second = b.Driver[property].toLowerCase();\n                        }\n                        if (first < second)\n                            return -1;\n                        if (first > second)\n                            return 1;\n                        return 0;\n                    });\n                    if (property === 'points' || property === 'wins') {\n                        this.drivers.reverse();\n                    }\n                }\n            }\n        },\n        mounted() {\n            if (this.year !== '') {\n                this.getData();\n            }\n        },\n        watch: {\n            year: function(value) {\n                this.getData();\n            }\n        }\n    };\n</script>\n\n<style scoped>\n    th {\n        cursor:pointer;\n    }\n    th.active {\n        color:#428bca;\n    }\n    .caret.reversed {\n        transform: rotate(180deg);\n    }\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.table>tbody>tr>td.tall-col {\n    vertical-align: middle;\n}\n", "", {"version":3,"sources":["/Users/charlie/Documents/f1-vuejs-webpack/src/components/src/components/Team.vue"],"names":[],"mappings":";AA8GA;IACA,uBAAA;CACA","file":"Team.vue","sourcesContent":["<template>\n    <div>\n        <div v-if=\"loading\">Loading...</div>\n        <div v-else-if=\"error\">An error has occurred. No team data is available.</div>\n        <div class=\"team\" v-else>\n            <h1>{{ team.Constructor.name }} &mdash; {{ year }} Season</h1>\n            <p><strong>Nationality:</strong> {{team.Constructor.nationality}}</p>\n            <p><a :href=\"team.Constructor.url\" target=\"_blank\" class=\"btn btn-default\">Wikipedia Bio</a></p>\n\n            <ul>\n                <li>{{year}} Wins: {{team.wins}}</li>\n                <li>Points: {{team.points}}</li>\n                <li>WCC Position: {{team.position}}</li>\n            </ul>\n        </div>\n\n        <div>\n            <h2>Results</h2>\n            <div v-if=\"loadingRaces\">Loading race data...</div>\n            <div v-else-if=\"errorRaces\">An error has occurred. No race data is available.</div>\n            <div v-else>\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>Race</th>\n                            <th>Location</th>\n                            <th>Date</th>\n                            <th>Driver</th>\n                            <th>Qualified</th>\n                            <th>Finished</th>\n                        </tr>\n                    </thead>\n                    <tbody v-for=\"race in races\">\n                        <tr>\n                            <td rowspan=\"2\" class=\"tall-col\"><router-link :to=\"'/races/' + race.round\"><a>{{race.raceName}}</a></router-link></td>\n                            <td rowspan=\"2\" class=\"tall-col\">{{race.Circuit.Location.locality + ', ' + race.Circuit.Location.country}}</td>\n                            <td rowspan=\"2\" class=\"tall-col\">{{race.date}}</td>\n                            <td class=\"active\"><router-link :to=\"'/drivers/' + race.Results[0].Driver.driverId\"><a>{{race.Results[0].Driver.givenName + ' ' + race.Results[0].Driver.familyName}}</a></router-link></td>\n                            <td class=\"active\">{{race.Results[0].grid}}</td>\n                            <td class=\"active\" :class=\"{ 'success': race.Results[0].position === '1' }\">{{race.Results[0].position}}</td>\n                        </tr>\n                        <tr class=\"active\">\n                            <td><router-link :to=\"'/drivers/' + race.Results[1].Driver.driverId\"><a>{{race.Results[1].Driver.givenName + ' ' + race.Results[1].Driver.familyName}}</a></router-link></td>\n                            <td>{{race.Results[1].grid}}</td>\n                            <td :class=\"{ 'success': race.Results[1].position === '1' }\">{{race.Results[1].position}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</template>\n<script>\n    export default {\n        name: 'team',\n        props: ['id', 'year'],\n        data: () => ({\n            loading: true,\n            loadingRaces: true,\n            team: {},\n            races: [],\n            error: false,\n            errorRaces: false\n        }),\n        methods: {\n            getData() {\n                this.loading = true;\n                this.loadingRaces = true;\n                this.error = false;\n                this.errorRaces = false;\n                this.$http.get('//ergast.com/api/f1/' + this.year + '/constructors/' + this.id + '/constructorStandings.json').then(response => {\n                    this.loading = false;\n                    if (response.body.MRData.StandingsTable.StandingsLists.length > 0) {\n                        this.team = response.body.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0];\n                    } else {\n                        this.error = true;\n                    }\n                }, response => {\n                    this.loading = false;\n                    this.error = true;\n                    console.log('team details error', response);\n                });\n                this.$http.get('//ergast.com/api/f1/' + this.year + '/constructors/' + this.id + '/results.json').then(response => {\n                    this.loadingRaces = false;\n                    if (response.body.MRData.RaceTable.Races.length > 0) {\n                        this.races = response.body.MRData.RaceTable.Races;\n                    } else {\n                        this.errorRaces = true;\n                    }\n                }, response => {\n                    this.loadingRaces = false;\n                    this.errorRaces = true;\n                    console.log('team drivers error', response);\n                });\n            }\n        },\n        mounted() {\n            if (this.year !== '') {\n                this.getData();\n            }\n        },\n        watch: {\n            year: function(value) {\n                this.getData();\n            }\n        }\n    };\n</script>\n\n<style>\n    .table>tbody>tr>td.tall-col {\n        vertical-align: middle;\n    }\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"App.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _Years = __webpack_require__(43);

var _Years2 = _interopRequireDefault(_Years);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

_vue2.default.component(_Years2.default.name, _Years2.default);
exports.default = {
    name: 'app',
    data: function data() {
        return {
            year: ''
        };
    },
    methods: {
        updateYear: function updateYear(year) {
            this.year = year;
        }
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'driver',
    props: ['id', 'year'],
    data: function data() {
        return {
            loading: true,
            loadingRaces: true,
            driver: {},
            races: [],
            error: false,
            errorRaces: false
        };
    },
    methods: {
        getData: function getData() {
            var _this = this;

            this.loading = true;
            this.loadingRaces = true;
            this.error = false;
            this.errorRaces = false;
            this.$http.get('//ergast.com/api/f1/' + this.year + '/drivers/' + this.id + '/driverStandings.json').then(function (response) {
                _this.loading = false;
                if (response.body.MRData.StandingsTable.StandingsLists.length > 0) {
                    _this.driver = response.body.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
                } else {
                    _this.error = true;
                }
            }, function (response) {
                _this.loading = false;
                _this.error = true;
                console.log('driver api error', response);
            });
            this.$http.get('//ergast.com/api/f1/' + this.year + '/drivers/' + this.id + '/results.json').then(function (response) {
                _this.loadingRaces = false;
                if (response.body.MRData.RaceTable.Races.length > 0) {
                    _this.races = response.body.MRData.RaceTable.Races;
                } else {
                    _this.errorRaces = true;
                }
            }, function (response) {
                _this.loadingRaces = false;
                _this.errorRaces = true;
                console.log('races api error', response);
            });
        }
    },
    mounted: function mounted() {
        if (this.year !== '') {
            this.getData();
        }
    },

    watch: {
        year: function year(value) {
            this.getData();
        }
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'drivers',
    props: ['year'],
    data: function data() {
        return {
            drivers: [],
            loading: true,
            sort: 'points',
            reversed: false,
            error: false
        };
    },
    methods: {
        getData: function getData() {
            var _this = this;

            this.loading = true;
            this.error = false;
            this.$http.get('//ergast.com/api/f1/' + this.year + '/driverStandings.json').then(function (response) {
                _this.loading = false;
                if (response.body.MRData.StandingsTable.StandingsLists.length > 0) {
                    _this.drivers = response.body.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                    _this.sort = 'points';
                    _this.reversed = false;
                } else {
                    _this.error = true;
                }
            }, function (response) {
                _this.loading = false;
                _this.error = true;
                console.log('error', response);
            });
        },
        sortDrivers: function sortDrivers(property) {
            var first = void 0,
                second = void 0;
            if (this.sort === property) {
                this.drivers.reverse();
                this.reversed = !this.reversed;
            } else {
                this.sort = property;
                this.reversed = false;
                this.drivers.sort(function (a, b) {
                    if (property === 'points' || property === 'wins') {
                        first = parseInt(a[property], 10);
                        second = parseInt(b[property], 10);
                    } else if (property === 'Constructors') {
                        first = a.Constructors[0].name;
                        second = b.Constructors[0].name;
                    } else {
                        first = a.Driver[property].toLowerCase();
                        second = b.Driver[property].toLowerCase();
                    }
                    if (first < second) return -1;
                    if (first > second) return 1;
                    return 0;
                });
                if (property === 'points' || property === 'wins') {
                    this.drivers.reverse();
                }
            }
        }
    },
    mounted: function mounted() {
        if (this.year !== '') {
            this.getData();
        }
    },

    watch: {
        year: function year(value) {
            this.getData();
        }
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'vue',
    props: ['id', 'year'],
    data: function data() {
        return {
            loading: true,
            race: {},
            error: false
        };
    },
    methods: {
        getRaceInfo: function getRaceInfo() {
            var _this = this;

            this.loading = true;
            this.error = false;
            this.$http.get('//ergast.com/api/f1/' + this.year + '/' + this.id + '/results.json').then(function (response) {
                _this.loading = false;
                if (response.body.MRData.RaceTable.Races.length > 0) {
                    _this.race = response.body.MRData.RaceTable.Races[0];
                } else {
                    _this.error = true;
                }
            }, function (response) {
                _this.loading = false;
                _this.error = true;
                console.log('error', response);
            });
        }
    },
    mounted: function mounted() {
        if (this.year !== '') {
            this.getRaceInfo();
        }
    },

    watch: {
        year: function year(value) {
            this.getRaceInfo();
        }
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'races',
    props: ['year'],
    data: function data() {
        return {
            loading: true,
            races: [],
            error: false
        };
    },
    methods: {
        getRaces: function getRaces() {
            var _this = this;

            this.loading = true;
            this.error = false;
            this.$http.get('//ergast.com/api/f1/' + this.year + '/results/1.json').then(function (response) {
                _this.loading = false;
                if (response.body.MRData.RaceTable.Races.length > 0) {
                    _this.races = response.body.MRData.RaceTable.Races;
                } else {
                    _this.error = true;
                }
            }, function (response) {
                _this.loading = false;
                _this.error = true;
                console.log('error', response);
            });
        }
    },
    mounted: function mounted() {
        if (this.year !== '') {
            this.getRaces();
        }
    },

    watch: {
        year: function year(value) {
            this.getRaces();
        }
    }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'team',
    props: ['id', 'year'],
    data: function data() {
        return {
            loading: true,
            loadingRaces: true,
            team: {},
            races: [],
            error: false,
            errorRaces: false
        };
    },
    methods: {
        getData: function getData() {
            var _this = this;

            this.loading = true;
            this.loadingRaces = true;
            this.error = false;
            this.errorRaces = false;
            this.$http.get('//ergast.com/api/f1/' + this.year + '/constructors/' + this.id + '/constructorStandings.json').then(function (response) {
                _this.loading = false;
                if (response.body.MRData.StandingsTable.StandingsLists.length > 0) {
                    _this.team = response.body.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0];
                } else {
                    _this.error = true;
                }
            }, function (response) {
                _this.loading = false;
                _this.error = true;
                console.log('team details error', response);
            });
            this.$http.get('//ergast.com/api/f1/' + this.year + '/constructors/' + this.id + '/results.json').then(function (response) {
                _this.loadingRaces = false;
                if (response.body.MRData.RaceTable.Races.length > 0) {
                    _this.races = response.body.MRData.RaceTable.Races;
                } else {
                    _this.errorRaces = true;
                }
            }, function (response) {
                _this.loadingRaces = false;
                _this.errorRaces = true;
                console.log('team drivers error', response);
            });
        }
    },
    mounted: function mounted() {
        if (this.year !== '') {
            this.getData();
        }
    },

    watch: {
        year: function year(value) {
            this.getData();
        }
    }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'teams',
    props: ['year'],
    data: function data() {
        return {
            teams: [],
            loading: true,
            error: false
        };
    },
    methods: {
        getData: function getData() {
            var _this = this;

            this.loading = true;
            this.error = false;
            this.$http.get('//ergast.com/api/f1/' + this.year + '/constructorStandings.json').then(function (response) {
                _this.loading = false;
                if (response.body.MRData.StandingsTable.StandingsLists.length > 0) {
                    _this.teams = response.body.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
                } else {
                    _this.error = true;
                }
            }, function (response) {
                _this.loading = false;
                _this.error = true;
                console.log('error', response);
            });
        }
    },
    mounted: function mounted() {
        if (this.year !== '') {
            this.getData();
        }
    },

    watch: {
        year: function year(value) {
            this.getData();
        }
    }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//

exports.default = {
    name: 'years',
    data: function data() {
        return {
            year: 0
        };
    },

    computed: {
        lastYear: function lastYear() {
            return new Date().getFullYear() - 1;
        },
        years: function years() {
            var currYear = this.lastYear;
            var yearsArray = [];
            for (var i = 0; i < 10; i++) {
                yearsArray.push(currYear);
                currYear--;
            }
            return yearsArray;
        }
    },
    methods: {
        updateYear: function updateYear(year) {
            this.$emit('update', year);
        }
    },
    mounted: function mounted() {
        this.year = this.lastYear;
        this.updateYear(this.year);
    }
};

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(52);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Teams = __webpack_require__(42);

var _Teams2 = _interopRequireDefault(_Teams);

var _Team = __webpack_require__(41);

var _Team2 = _interopRequireDefault(_Team);

var _Drivers = __webpack_require__(38);

var _Drivers2 = _interopRequireDefault(_Drivers);

var _Driver = __webpack_require__(37);

var _Driver2 = _interopRequireDefault(_Driver);

var _Races = __webpack_require__(40);

var _Races2 = _interopRequireDefault(_Races);

var _Race = __webpack_require__(39);

var _Race2 = _interopRequireDefault(_Race);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
    routes: [{
        path: '/teams',
        name: 'Teams',
        component: _Teams2.default
    }, {
        path: '/teams/:id',
        name: 'Team',
        component: _Team2.default,
        props: true
    }, {
        path: '/drivers',
        name: 'Drivers',
        component: _Drivers2.default
    }, {
        path: '/drivers/:id',
        name: 'Driver',
        component: _Driver2.default,
        props: true
    }, {
        path: '/races',
        name: 'Races',
        component: _Races2.default
    }, {
        path: '/races/:id',
        name: 'Race',
        component: _Race2.default,
        props: true
    }, { path: '*',
        redirect: '/teams'
    }]
});

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ba5bd90_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(51);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(57)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ba5bd90_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(0)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ba5bd90", Component.options)
  } else {
    hotAPI.reload("data-v-7ba5bd90", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = Component.exports;


/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Driver_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Driver_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Driver_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Driver_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Driver_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f6aea58_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Driver_vue__ = __webpack_require__(44);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(53)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Driver_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f6aea58_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Driver_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Driver.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(0)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f6aea58", Component.options)
  } else {
    hotAPI.reload("data-v-0f6aea58", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = Component.exports;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drivers_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drivers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drivers_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drivers_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drivers_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3cc3fc6a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Drivers_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(55)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3cc3fc6a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drivers_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3cc3fc6a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Drivers_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Drivers.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(0)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cc3fc6a", Component.options)
  } else {
    hotAPI.reload("data-v-3cc3fc6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = Component.exports;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Race_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Race_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Race_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Race_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Race_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b7fb2fe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Race_vue__ = __webpack_require__(48);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Race_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b7fb2fe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Race_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Race.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(0)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b7fb2fe", Component.options)
  } else {
    hotAPI.reload("data-v-5b7fb2fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = Component.exports;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Races_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Races_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Races_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Races_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Races_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79704ac2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Races_vue__ = __webpack_require__(50);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Races_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79704ac2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Races_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Races.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(0)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79704ac2", Component.options)
  } else {
    hotAPI.reload("data-v-79704ac2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = Component.exports;


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Team_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Team_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Team_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Team_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Team_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72a2780d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Team_vue__ = __webpack_require__(49);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(56)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Team_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72a2780d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Team_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Team.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(0)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72a2780d", Component.options)
  } else {
    hotAPI.reload("data-v-72a2780d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = Component.exports;


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Teams_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Teams_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Teams_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Teams_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Teams_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_354faa94_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Teams_vue__ = __webpack_require__(45);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(54)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Teams_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_354faa94_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Teams_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Teams.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(0)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-354faa94", Component.options)
  } else {
    hotAPI.reload("data-v-354faa94", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = Component.exports;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Years_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Years_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Years_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Years_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Years_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5992de54_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Years_vue__ = __webpack_require__(47);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Years_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5992de54_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Years_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Years.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(0)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5992de54", Component.options)
  } else {
    hotAPI.reload("data-v-5992de54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = Component.exports;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.loading
      ? _c("div", [_vm._v("Loading...")])
      : _vm.error
        ? _c("div", [
            _vm._v("An error has occurred. No driver data is available.")
          ])
        : _c("div", { staticClass: "driver" }, [
            _c("h1", { staticClass: "driver-name" }, [
              _vm._v(
                _vm._s(_vm.driver.Driver.givenName) +
                  " " +
                  _vm._s(_vm.driver.Driver.familyName) +
                  " — " +
                  _vm._s(_vm.year) +
                  " Season"
              )
            ]),
            _vm._v(" "),
            _c(
              "p",
              [
                _c("strong", [_vm._v("Nationality:")]),
                _vm._v(" " + _vm._s(_vm.driver.Driver.nationality) + " "),
                _c("br"),
                _vm._v(" "),
                _c("strong", [_vm._v("Teams:")]),
                _vm._v(" "),
                _vm._l(_vm.driver.Constructors, function(team, index) {
                  return _c(
                    "span",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/teams/" + team.constructorId } },
                        [_c("a", [_vm._v(_vm._s(team.name))])]
                      ),
                      index + 1 < _vm.driver.Constructors.length
                        ? _c("span", [_vm._v(", ")])
                        : _vm._e()
                    ],
                    1
                  )
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("strong", [_vm._v("Birthday:")]),
                _vm._v(" " + _vm._s(_vm.driver.Driver.dateOfBirth) + " "),
                _c("br")
              ],
              2
            ),
            _vm._v(" "),
            _c("p", [
              _c(
                "a",
                {
                  staticClass: "btn btn-default",
                  attrs: { href: _vm.driver.Driver.url, target: "_blank" }
                },
                [_vm._v("Wikipedia Bio")]
              )
            ]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [
                _c("strong", [_vm._v(_vm._s(_vm.year) + " Wins:")]),
                _vm._v(" " + _vm._s(_vm.driver.wins))
              ]),
              _vm._v(" "),
              _c("li", [
                _c("strong", [_vm._v("Points:")]),
                _vm._v(" " + _vm._s(_vm.driver.points))
              ]),
              _vm._v(" "),
              _c("li", [
                _c("strong", [_vm._v("WDC Position:")]),
                _vm._v(" " + _vm._s(_vm.driver.position))
              ])
            ])
          ]),
    _vm._v(" "),
    _c("div", [
      _c("h2", [_vm._v("Results")]),
      _vm._v(" "),
      _vm.loadingRaces
        ? _c("div", [_vm._v("Loading race data...")])
        : _vm.errorRaces
          ? _c("div", [
              _vm._v("An error has occurred. No race data is available.")
            ])
          : _c("div", [
              _c("table", { staticClass: "table" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.races, function(race) {
                    return _c(
                      "tr",
                      { class: { success: race.Results[0].position === "1" } },
                      [
                        _c("td", [_vm._v(_vm._s(race.round))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "/races/" + race.round } },
                              [_c("a", [_vm._v(_vm._s(race.raceName))])]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to:
                                    "/teams/" +
                                    race.Results[0].Constructor.constructorId
                                }
                              },
                              [
                                _c("a", [
                                  _vm._v(
                                    _vm._s(race.Results[0].Constructor.name)
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(race.Results[0].grid))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(race.Results[0].position))])
                      ]
                    )
                  })
                )
              ])
            ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Round")]),
        _vm._v(" "),
        _c("th", [_vm._v("Grand Prix")]),
        _vm._v(" "),
        _c("th", [_vm._v("Team")]),
        _vm._v(" "),
        _c("th", [_vm._v("Qualified")]),
        _vm._v(" "),
        _c("th", [_vm._v("Finished")])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(0)      .rerender("data-v-0f6aea58", esExports)
  }
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "teams" }, [
    _c("h1", [_vm._v("Teams — " + _vm._s(_vm.year) + " Season")]),
    _vm._v(" "),
    _vm.loading
      ? _c("div", [_vm._v("Loading...")])
      : _vm.error
        ? _c("div", [
            _vm._v("An error has occurred. No team data is available.")
          ])
        : _c("table", { staticClass: "table table-striped" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.teams, function(team) {
                return _c("tr", [
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: "/teams/" + team.Constructor.constructorId
                          }
                        },
                        [_c("a", [_vm._v(_vm._s(team.Constructor.name))])]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(team.Constructor.nationality))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(team.points))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(team.wins))])
                ])
              })
            )
          ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nationality")]),
        _vm._v(" "),
        _c("th", [_vm._v("Points")]),
        _vm._v(" "),
        _c("th", [_vm._v("Wins")])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(0)      .rerender("data-v-354faa94", esExports)
  }
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "drivers" }, [
    _c("h1", [_vm._v("Drivers — " + _vm._s(_vm.year) + " Season")]),
    _vm._v(" "),
    _vm.loading
      ? _c("div", [_vm._v("Loading...")])
      : _vm.error
        ? _c("div", [
            _vm._v("An error has occurred. No driver data is available.")
          ])
        : _c("table", { staticClass: "table table-striped" }, [
            _c("thead", [
              _c("tr", [
                _c(
                  "th",
                  {
                    class: { active: _vm.sort === "familyName" },
                    on: {
                      click: function($event) {
                        _vm.sortDrivers("familyName")
                      }
                    }
                  },
                  [
                    _vm._v("Name "),
                    _vm.sort === "familyName"
                      ? _c("span", {
                          staticClass: "caret",
                          class: { reversed: _vm.reversed }
                        })
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    class: { active: _vm.sort === "Constructors" },
                    on: {
                      click: function($event) {
                        _vm.sortDrivers("Constructors")
                      }
                    }
                  },
                  [
                    _vm._v("Teams "),
                    _vm.sort === "Constructors"
                      ? _c("span", {
                          staticClass: "caret",
                          class: { reversed: _vm.reversed }
                        })
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    class: { active: _vm.sort === "nationality" },
                    on: {
                      click: function($event) {
                        _vm.sortDrivers("nationality")
                      }
                    }
                  },
                  [
                    _vm._v("Nationality "),
                    _vm.sort === "nationality"
                      ? _c("span", {
                          staticClass: "caret",
                          class: { reversed: _vm.reversed }
                        })
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    class: { active: _vm.sort === "points" },
                    on: {
                      click: function($event) {
                        _vm.sortDrivers("points")
                      }
                    }
                  },
                  [
                    _vm._v("Points "),
                    _vm.sort === "points"
                      ? _c("span", {
                          staticClass: "caret",
                          class: { reversed: _vm.reversed }
                        })
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    class: { active: _vm.sort === "wins" },
                    on: {
                      click: function($event) {
                        _vm.sortDrivers("wins")
                      }
                    }
                  },
                  [
                    _vm._v("Wins "),
                    _vm.sort === "wins"
                      ? _c("span", {
                          staticClass: "caret",
                          class: { reversed: _vm.reversed }
                        })
                      : _vm._e()
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.drivers, function(driver) {
                return _c("tr", [
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/drivers/" + driver.Driver.driverId } },
                        [
                          _c("a", [
                            _vm._v(
                              _vm._s(
                                driver.Driver.givenName +
                                  " " +
                                  driver.Driver.familyName
                              )
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    _vm._l(driver.Constructors, function(team, index) {
                      return _c(
                        "span",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to:
                                  "/teams/" +
                                  _vm.year +
                                  "/" +
                                  team.constructorId
                              }
                            },
                            [_c("a", [_vm._v(_vm._s(team.name))])]
                          ),
                          index + 1 < driver.Constructors.length
                            ? _c("span", [_vm._v(", ")])
                            : _vm._e()
                        ],
                        1
                      )
                    })
                  ),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(driver.Driver.nationality))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(driver.points))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(driver.wins))])
                ])
              })
            )
          ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(0)      .rerender("data-v-3cc3fc6a", esExports)
  }
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "years form-inline" }, [
    _c("label", { attrs: { for: "year-select" } }, [_vm._v("Year:")]),
    _vm._v(" "),
    _c(
      "select",
      {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.year,
            expression: "year"
          }
        ],
        staticClass: "form-control",
        attrs: { id: "year-select" },
        on: {
          change: [
            function($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function(o) {
                  return o.selected
                })
                .map(function(o) {
                  var val = "_value" in o ? o._value : o.value
                  return val
                })
              _vm.year = $event.target.multiple
                ? $$selectedVal
                : $$selectedVal[0]
            },
            function($event) {
              _vm.updateYear($event.target.value)
            }
          ]
        }
      },
      _vm._l(_vm.years, function(yearValue) {
        return _c("option", { domProps: { value: yearValue } }, [
          _vm._v(_vm._s(yearValue))
        ])
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(0)      .rerender("data-v-5992de54", esExports)
  }
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.loading
    ? _c("div", [_vm._v("Loading...")])
    : _vm.error
      ? _c("div", [_vm._v("An error has occurred. No race data is available.")])
      : _c("div", { staticClass: "race" }, [
          _c("h1", { staticClass: "race-name" }, [
            _vm._v(
              _vm._s(_vm.race.raceName) + " — " + _vm._s(_vm.year) + " Season"
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _c("strong", [_vm._v("Date:")]),
            _vm._v(" " + _vm._s(_vm.race.date) + " "),
            _c("br"),
            _vm._v(" "),
            _c("strong", [_vm._v("Circuit:")]),
            _vm._v(" " + _vm._s(_vm.race.Circuit.circuitName) + " "),
            _c("br"),
            _vm._v(" "),
            _c("strong", [_vm._v("Location:")]),
            _vm._v(
              " " +
                _vm._s(_vm.race.Circuit.Location.locality) +
                ", " +
                _vm._s(_vm.race.Circuit.Location.country) +
                "\n    "
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _c(
              "a",
              {
                staticClass: "btn btn-default",
                attrs: { href: _vm.race.url, target: "_blank" }
              },
              [_vm._v("Race Wikipedia Bio")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-default",
                attrs: { href: _vm.race.Circuit.url, target: "_blank" }
              },
              [_vm._v("Circuit Wikipedia Bio")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-default",
                attrs: {
                  href:
                    "https://www.google.com/maps/search/?api=1&query=" +
                    _vm.race.Circuit.Location.lat +
                    "," +
                    _vm.race.Circuit.Location.long,
                  target: "_blank"
                }
              },
              [_vm._v("View on Google Maps")]
            )
          ]),
          _vm._v(" "),
          _c("h2", [_vm._v("Results")]),
          _vm._v(" "),
          _c("table", { staticClass: "table table-striped" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.race.Results, function(driver) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(driver.position))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/drivers/" + driver.Driver.driverId } },
                        [
                          _c("a", [
                            _vm._v(
                              _vm._s(driver.Driver.givenName) +
                                " " +
                                _vm._s(driver.Driver.familyName)
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: "/teams/" + driver.Constructor.constructorId
                          }
                        },
                        [_c("a", [_vm._v(_vm._s(driver.Constructor.name))])]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(driver.grid))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(driver.laps) + " laps – " + _vm._s(driver.status)
                    )
                  ])
                ])
              })
            )
          ])
        ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Position")]),
        _vm._v(" "),
        _c("th", [_vm._v("Driver")]),
        _vm._v(" "),
        _c("th", [_vm._v("Team")]),
        _vm._v(" "),
        _c("th", [_vm._v("Qualified")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(0)      .rerender("data-v-5b7fb2fe", esExports)
  }
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.loading
      ? _c("div", [_vm._v("Loading...")])
      : _vm.error
        ? _c("div", [
            _vm._v("An error has occurred. No team data is available.")
          ])
        : _c("div", { staticClass: "team" }, [
            _c("h1", [
              _vm._v(
                _vm._s(_vm.team.Constructor.name) +
                  " — " +
                  _vm._s(_vm.year) +
                  " Season"
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v("Nationality:")]),
              _vm._v(" " + _vm._s(_vm.team.Constructor.nationality))
            ]),
            _vm._v(" "),
            _c("p", [
              _c(
                "a",
                {
                  staticClass: "btn btn-default",
                  attrs: { href: _vm.team.Constructor.url, target: "_blank" }
                },
                [_vm._v("Wikipedia Bio")]
              )
            ]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [
                _vm._v(_vm._s(_vm.year) + " Wins: " + _vm._s(_vm.team.wins))
              ]),
              _vm._v(" "),
              _c("li", [_vm._v("Points: " + _vm._s(_vm.team.points))]),
              _vm._v(" "),
              _c("li", [_vm._v("WCC Position: " + _vm._s(_vm.team.position))])
            ])
          ]),
    _vm._v(" "),
    _c("div", [
      _c("h2", [_vm._v("Results")]),
      _vm._v(" "),
      _vm.loadingRaces
        ? _c("div", [_vm._v("Loading race data...")])
        : _vm.errorRaces
          ? _c("div", [
              _vm._v("An error has occurred. No race data is available.")
            ])
          : _c("div", [
              _c(
                "table",
                { staticClass: "table" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._l(_vm.races, function(race) {
                    return _c("tbody", [
                      _c("tr", [
                        _c(
                          "td",
                          { staticClass: "tall-col", attrs: { rowspan: "2" } },
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "/races/" + race.round } },
                              [_c("a", [_vm._v(_vm._s(race.raceName))])]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "tall-col", attrs: { rowspan: "2" } },
                          [
                            _vm._v(
                              _vm._s(
                                race.Circuit.Location.locality +
                                  ", " +
                                  race.Circuit.Location.country
                              )
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "tall-col", attrs: { rowspan: "2" } },
                          [_vm._v(_vm._s(race.date))]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "active" },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to:
                                    "/drivers/" +
                                    race.Results[0].Driver.driverId
                                }
                              },
                              [
                                _c("a", [
                                  _vm._v(
                                    _vm._s(
                                      race.Results[0].Driver.givenName +
                                        " " +
                                        race.Results[0].Driver.familyName
                                    )
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "active" }, [
                          _vm._v(_vm._s(race.Results[0].grid))
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "active",
                            class: { success: race.Results[0].position === "1" }
                          },
                          [_vm._v(_vm._s(race.Results[0].position))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", { staticClass: "active" }, [
                        _c(
                          "td",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to:
                                    "/drivers/" +
                                    race.Results[1].Driver.driverId
                                }
                              },
                              [
                                _c("a", [
                                  _vm._v(
                                    _vm._s(
                                      race.Results[1].Driver.givenName +
                                        " " +
                                        race.Results[1].Driver.familyName
                                    )
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(race.Results[1].grid))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            class: { success: race.Results[1].position === "1" }
                          },
                          [_vm._v(_vm._s(race.Results[1].position))]
                        )
                      ])
                    ])
                  })
                ],
                2
              )
            ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Race")]),
        _vm._v(" "),
        _c("th", [_vm._v("Location")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Driver")]),
        _vm._v(" "),
        _c("th", [_vm._v("Qualified")]),
        _vm._v(" "),
        _c("th", [_vm._v("Finished")])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(0)      .rerender("data-v-72a2780d", esExports)
  }
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "races" }, [
    _c("h1", [_vm._v("Races — " + _vm._s(_vm.year) + " Season")]),
    _vm._v(" "),
    _vm.loading
      ? _c("div", [_vm._v("Loading...")])
      : _vm.error
        ? _c("div", [
            _vm._v("An error has occurred. No race data is available.")
          ])
        : _c("table", { staticClass: "table table-striped" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.races, function(race) {
                return _c("tr", [
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/races/" + race.round } },
                        [_c("a", [_vm._v(_vm._s(race.raceName))])]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(race.date))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(race.Circuit.circuitName))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(race.Circuit.Location.locality) +
                        ", " +
                        _vm._s(race.Circuit.Location.country)
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: "/drivers/" + race.Results[0].Driver.driverId
                          }
                        },
                        [
                          _c("a", [
                            _vm._v(
                              _vm._s(race.Results[0].Driver.givenName) +
                                " " +
                                _vm._s(race.Results[0].Driver.familyName)
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to:
                              "/teams/" +
                              race.Results[0].Constructor.constructorId
                          }
                        },
                        [
                          _c("a", [
                            _vm._v(_vm._s(race.Results[0].Constructor.name))
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ])
              })
            )
          ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Circuit")]),
        _vm._v(" "),
        _c("th", [_vm._v("Location")]),
        _vm._v(" "),
        _c("th", [_vm._v("Winning Driver")]),
        _vm._v(" "),
        _c("th", [_vm._v("Winning Team")])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(0)      .rerender("data-v-79704ac2", esExports)
  }
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [
    _c("nav", { staticClass: "navbar navbar-default" }, [
      _c("div", { staticClass: "container" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "collapse navbar-collapse", attrs: { id: "navbar" } },
          [
            _c(
              "ul",
              { staticClass: "nav navbar-nav" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      tag: "li",
                      to: "/teams",
                      "exact-active-class": "active",
                      "active-class": "active"
                    }
                  },
                  [_c("a", [_vm._v("Teams")])]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    attrs: {
                      tag: "li",
                      to: "/drivers",
                      "exact-active-class": "active",
                      "active-class": "active"
                    }
                  },
                  [_c("a", [_vm._v("Drivers")])]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    attrs: {
                      tag: "li",
                      to: "/races",
                      "exact-active-class": "active",
                      "active-class": "active"
                    }
                  },
                  [_c("a", [_vm._v("Races")])]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "navbar-form" },
                  [_c("years", { on: { update: _vm.updateYear } })],
                  1
                )
              ],
              1
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "main",
      { staticClass: "container", attrs: { id: "main" } },
      [_c("router-view", { attrs: { year: _vm.year } })],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navbar-header" }, [
      _c(
        "button",
        {
          staticClass: "navbar-toggle collapsed",
          attrs: {
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#navbar",
            "aria-expanded": "false"
          }
        },
        [
          _c("span", { staticClass: "sr-only" }, [_vm._v("Toggle navigation")]),
          _vm._v(" "),
          _c("span", { staticClass: "icon-bar" }),
          _vm._v(" "),
          _c("span", { staticClass: "icon-bar" }),
          _vm._v(" "),
          _c("span", { staticClass: "icon-bar" })
        ]
      ),
      _vm._v(" "),
      _c("a", { staticClass: "navbar-brand", attrs: { href: "#" } }, [
        _vm._v("F1 Data App")
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(0)      .rerender("data-v-7ba5bd90", esExports)
  }
}

/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3d6904fb", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(6, function() {
     var newContent = __webpack_require__(6);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("539a9294", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(7, function() {
     var newContent = __webpack_require__(7);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("7e8a29b0", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(8, function() {
     var newContent = __webpack_require__(8);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("78b49fc4", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(9, function() {
     var newContent = __webpack_require__(9);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("2fbdf82a", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(10, function() {
     var newContent = __webpack_require__(10);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vueResource = __webpack_require__(27);

var _vueResource2 = _interopRequireDefault(_vueResource);

var _App = __webpack_require__(26);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(22);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(23);

_vue2.default.use(_vueResource2.default);

new _vue2.default({
    el: '#app',
    router: _router2.default,
    template: '<App/>',
    components: { App: _App2.default }
});

/***/ })
],[61]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ecml2ZXIudnVlP2NlNmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVhbXMudnVlP2FmZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJpdmVycy52dWU/NjEzNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZWFtLnZ1ZT85ZjY4Iiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlP2M0YmMiLCJ3ZWJwYWNrOi8vL3NyYy9BcHAudnVlIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Ecml2ZXIudnVlIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Ecml2ZXJzLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUmFjZS52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1JhY2VzLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVGVhbS52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1RlYW1zLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvWWVhcnMudnVlIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJpdmVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ecml2ZXJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYWNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYWNlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVhbS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVhbXMudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1llYXJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ecml2ZXIudnVlPzA1MjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVhbXMudnVlPzBjNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJpdmVycy52dWU/YzQyMyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ZZWFycy52dWU/ZWMyYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYWNlLnZ1ZT8wOGU3Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RlYW0udnVlP2Q5MGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmFjZXMudnVlP2I0ZTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/OGI5MSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ecml2ZXIudnVlP2M1OWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVhbXMudnVlPzcxMTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJpdmVycy52dWU/MjA4NCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZWFtLnZ1ZT82ZTFhIiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlP2RkZGQiLCJ3ZWJwYWNrOi8vL2dvdCAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsidXNlIiwicm91dGVzIiwicGF0aCIsIm5hbWUiLCJjb21wb25lbnQiLCJwcm9wcyIsInJlZGlyZWN0IiwicmVxdWlyZSIsImVsIiwicm91dGVyIiwidGVtcGxhdGUiLCJjb21wb25lbnRzIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSw2UEFBOFAsc0ZBQXNGOztBQUVwVjs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsdUtBQXdLLHFGQUFxRjs7QUFFN1A7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLGdEQUFpRCxxQkFBcUIsR0FBRyw4QkFBOEIsb0JBQW9CLEdBQUcsb0NBQW9D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QTs7QUFFQTtBQUNBLFdBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFDQTtBQUNBO0FBQ0Esd0JBQThMO0FBQzlMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3SztBQUN4SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLHdCQUE2TDtBQUM3TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUs7QUFDdks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0s7QUFDeEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVE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O0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7O0FDcEJBLGU7Ozs7Ozs7OztBQ0lBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFQQSxtQkFBQUMsQ0FBUSxFQUFSO0FBQ0EsbUJBQUFBLENBQVEsRUFBUjtBQUNBLG1CQUFBQSxDQUFRLEVBQVI7O0FBT0EsY0FBSVAsR0FBSjs7QUFFQSxrQkFBUTtBQUNKUSxRQUFJLE1BREE7QUFFSkMsNEJBRkk7QUFHSkMsY0FBVSxRQUhOO0FBSUpDLGdCQUFZLEVBQUVDLGtCQUFGO0FBSlIsQ0FBUixFIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIkRyaXZlci52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTBmNmFlYTU4XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0RyaXZlci52dWVcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJUZWFtcy52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTM1NGZhYTk0XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1RlYW1zLnZ1ZVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxudGhbZGF0YS12LTNjYzNmYzZhXSB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG50aC5hY3RpdmVbZGF0YS12LTNjYzNmYzZhXSB7XFxuICAgIGNvbG9yOiM0MjhiY2E7XFxufVxcbi5jYXJldC5yZXZlcnNlZFtkYXRhLXYtM2NjM2ZjNmFdIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9jaGFybGllL0RvY3VtZW50cy9mMS12dWVqcy13ZWJwYWNrL3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL0RyaXZlcnMudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEyR0E7SUFDQSxlQUFBO0NBQ0E7QUFDQTtJQUNBLGNBQUE7Q0FDQTtBQUNBO0lBQ0EsMEJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiRHJpdmVycy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkcml2ZXJzXFxcIj5cXG4gICAgICAgIDxoMT5Ecml2ZXJzICZtZGFzaDsge3t5ZWFyfX0gU2Vhc29uPC9oMT5cXG4gICAgICAgIDxkaXYgdi1pZj1cXFwibG9hZGluZ1xcXCI+TG9hZGluZy4uLjwvZGl2PlxcbiAgICAgICAgPGRpdiB2LWVsc2UtaWY9XFxcImVycm9yXFxcIj5BbiBlcnJvciBoYXMgb2NjdXJyZWQuIE5vIGRyaXZlciBkYXRhIGlzIGF2YWlsYWJsZS48L2Rpdj5cXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCIgdi1lbHNlPlxcbiAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIHYtb246Y2xpY2s9XFxcInNvcnREcml2ZXJzKCdmYW1pbHlOYW1lJylcXFwiIDpjbGFzcz1cXFwieydhY3RpdmUnOiBzb3J0ID09PSAnZmFtaWx5TmFtZSd9XFxcIj5OYW1lIDxzcGFuIGNsYXNzPVxcXCJjYXJldFxcXCIgOmNsYXNzPVxcXCJ7ICdyZXZlcnNlZCc6IHJldmVyc2VkIH1cXFwiIHYtaWY9XFxcInNvcnQgPT09ICdmYW1pbHlOYW1lJ1xcXCI+PC9zcGFuPjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggdi1vbjpjbGljaz1cXFwic29ydERyaXZlcnMoJ0NvbnN0cnVjdG9ycycpXFxcIiA6Y2xhc3M9XFxcInsnYWN0aXZlJzogc29ydCA9PT0gJ0NvbnN0cnVjdG9ycyd9XFxcIj5UZWFtcyA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiIDpjbGFzcz1cXFwieyAncmV2ZXJzZWQnOiByZXZlcnNlZCB9XFxcIiB2LWlmPVxcXCJzb3J0ID09PSAnQ29uc3RydWN0b3JzJ1xcXCI+PC9zcGFuPjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggdi1vbjpjbGljaz1cXFwic29ydERyaXZlcnMoJ25hdGlvbmFsaXR5JylcXFwiIDpjbGFzcz1cXFwieydhY3RpdmUnOiBzb3J0ID09PSAnbmF0aW9uYWxpdHknfVxcXCI+TmF0aW9uYWxpdHkgPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIiA6Y2xhc3M9XFxcInsgJ3JldmVyc2VkJzogcmV2ZXJzZWQgfVxcXCIgdi1pZj1cXFwic29ydCA9PT0gJ25hdGlvbmFsaXR5J1xcXCI+PC9zcGFuPjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggdi1vbjpjbGljaz1cXFwic29ydERyaXZlcnMoJ3BvaW50cycpXFxcIiA6Y2xhc3M9XFxcInsnYWN0aXZlJzogc29ydCA9PT0gJ3BvaW50cyd9XFxcIj5Qb2ludHMgPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIiA6Y2xhc3M9XFxcInsgJ3JldmVyc2VkJzogcmV2ZXJzZWQgfVxcXCIgdi1pZj1cXFwic29ydCA9PT0gJ3BvaW50cydcXFwiPjwvc3Bhbj48L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIHYtb246Y2xpY2s9XFxcInNvcnREcml2ZXJzKCd3aW5zJylcXFwiIDpjbGFzcz1cXFwieydhY3RpdmUnOiBzb3J0ID09PSAnd2lucyd9XFxcIj5XaW5zIDxzcGFuIGNsYXNzPVxcXCJjYXJldFxcXCIgOmNsYXNzPVxcXCJ7ICdyZXZlcnNlZCc6IHJldmVyc2VkIH1cXFwiIHYtaWY9XFxcInNvcnQgPT09ICd3aW5zJ1xcXCI+PC9zcGFuPjwvdGg+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cXFwiZHJpdmVyIGluIGRyaXZlcnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XFxcIicvZHJpdmVycy8nICsgZHJpdmVyLkRyaXZlci5kcml2ZXJJZFxcXCI+PGE+e3tkcml2ZXIuRHJpdmVyLmdpdmVuTmFtZSArICcgJyArIGRyaXZlci5Ecml2ZXIuZmFtaWx5TmFtZX19PC9hPjwvcm91dGVyLWxpbms+PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWZvcj1cXFwiKHRlYW0sIGluZGV4KSBpbiBkcml2ZXIuQ29uc3RydWN0b3JzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwiJy90ZWFtcy8nICsgeWVhciArICcvJyArIHRlYW0uY29uc3RydWN0b3JJZFxcXCI+PGE+e3t0ZWFtLm5hbWV9fTwvYT48L3JvdXRlci1saW5rPjxzcGFuIHYtaWY9XFxcImluZGV4KzEgPCBkcml2ZXIuQ29uc3RydWN0b3JzLmxlbmd0aFxcXCI+LCA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e2RyaXZlci5Ecml2ZXIubmF0aW9uYWxpdHl9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3tkcml2ZXIucG9pbnRzfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7ZHJpdmVyLndpbnN9fTwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgIDwvdGFibGU+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgbmFtZTogJ2RyaXZlcnMnLFxcbiAgICAgICAgcHJvcHM6IFsneWVhciddLFxcbiAgICAgICAgZGF0YTogKCkgPT4gKHtcXG4gICAgICAgICAgICBkcml2ZXJzOiBbXSxcXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxcbiAgICAgICAgICAgIHNvcnQ6ICdwb2ludHMnLFxcbiAgICAgICAgICAgIHJldmVyc2VkOiBmYWxzZSxcXG4gICAgICAgICAgICBlcnJvcjogZmFsc2VcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGdldERhdGEoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XFxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcXG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoJy8vZXJnYXN0LmNvbS9hcGkvZjEvJyArIHRoaXMueWVhciArICcvZHJpdmVyU3RhbmRpbmdzLmpzb24nKS50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmJvZHkuTVJEYXRhLlN0YW5kaW5nc1RhYmxlLlN0YW5kaW5nc0xpc3RzLmxlbmd0aCA+IDApIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyaXZlcnMgPSByZXNwb25zZS5ib2R5Lk1SRGF0YS5TdGFuZGluZ3NUYWJsZS5TdGFuZGluZ3NMaXN0c1swXS5Ecml2ZXJTdGFuZGluZ3M7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0ID0gJ3BvaW50cyc7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXZlcnNlZCA9IGZhbHNlO1xcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIHJlc3BvbnNlKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBzb3J0RHJpdmVycyhwcm9wZXJ0eSkge1xcbiAgICAgICAgICAgICAgICBsZXQgZmlyc3QsIHNlY29uZDtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc29ydCA9PT0gcHJvcGVydHkpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJpdmVycy5yZXZlcnNlKCk7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldmVyc2VkID0gIXRoaXMucmV2ZXJzZWQ7XFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnQgPSBwcm9wZXJ0eTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV2ZXJzZWQgPSBmYWxzZTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJpdmVycy5zb3J0KChhLCBiKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSAncG9pbnRzJyB8fCBwcm9wZXJ0eSA9PT0gJ3dpbnMnKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0ID0gcGFyc2VJbnQoYVtwcm9wZXJ0eV0sIDEwKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gcGFyc2VJbnQoYltwcm9wZXJ0eV0sIDEwKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5ID09PSAnQ29uc3RydWN0b3JzJykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IGEuQ29uc3RydWN0b3JzWzBdLm5hbWU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZCA9IGIuQ29uc3RydWN0b3JzWzBdLm5hbWU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSBhLkRyaXZlcltwcm9wZXJ0eV0udG9Mb3dlckNhc2UoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gYi5Ecml2ZXJbcHJvcGVydHldLnRvTG93ZXJDYXNlKCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdCA8IHNlY29uZClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdCA+IHNlY29uZClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ3BvaW50cycgfHwgcHJvcGVydHkgPT09ICd3aW5zJykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJpdmVycy5yZXZlcnNlKCk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgbW91bnRlZCgpIHtcXG4gICAgICAgICAgICBpZiAodGhpcy55ZWFyICE9PSAnJykge1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEoKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgd2F0Y2g6IHtcXG4gICAgICAgICAgICB5ZWFyOiBmdW5jdGlvbih2YWx1ZSkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEoKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4gICAgdGgge1xcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIH1cXG4gICAgdGguYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiM0MjhiY2E7XFxuICAgIH1cXG4gICAgLmNhcmV0LnJldmVyc2VkIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIH1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTNjYzNmYzZhXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvRHJpdmVycy52dWVcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWJsZT50Ym9keT50cj50ZC50YWxsLWNvbCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvY2hhcmxpZS9Eb2N1bWVudHMvZjEtdnVlanMtd2VicGFjay9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9UZWFtLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBOEdBO0lBQ0EsdUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiVGVhbS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGRpdiB2LWlmPVxcXCJsb2FkaW5nXFxcIj5Mb2FkaW5nLi4uPC9kaXY+XFxuICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cXFwiZXJyb3JcXFwiPkFuIGVycm9yIGhhcyBvY2N1cnJlZC4gTm8gdGVhbSBkYXRhIGlzIGF2YWlsYWJsZS48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRlYW1cXFwiIHYtZWxzZT5cXG4gICAgICAgICAgICA8aDE+e3sgdGVhbS5Db25zdHJ1Y3Rvci5uYW1lIH19ICZtZGFzaDsge3sgeWVhciB9fSBTZWFzb248L2gxPlxcbiAgICAgICAgICAgIDxwPjxzdHJvbmc+TmF0aW9uYWxpdHk6PC9zdHJvbmc+IHt7dGVhbS5Db25zdHJ1Y3Rvci5uYXRpb25hbGl0eX19PC9wPlxcbiAgICAgICAgICAgIDxwPjxhIDpocmVmPVxcXCJ0ZWFtLkNvbnN0cnVjdG9yLnVybFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPldpa2lwZWRpYSBCaW88L2E+PC9wPlxcblxcbiAgICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICAgICAgPGxpPnt7eWVhcn19IFdpbnM6IHt7dGVhbS53aW5zfX08L2xpPlxcbiAgICAgICAgICAgICAgICA8bGk+UG9pbnRzOiB7e3RlYW0ucG9pbnRzfX08L2xpPlxcbiAgICAgICAgICAgICAgICA8bGk+V0NDIFBvc2l0aW9uOiB7e3RlYW0ucG9zaXRpb259fTwvbGk+XFxuICAgICAgICAgICAgPC91bD5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8aDI+UmVzdWx0czwvaDI+XFxuICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJsb2FkaW5nUmFjZXNcXFwiPkxvYWRpbmcgcmFjZSBkYXRhLi4uPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiB2LWVsc2UtaWY9XFxcImVycm9yUmFjZXNcXFwiPkFuIGVycm9yIGhhcyBvY2N1cnJlZC4gTm8gcmFjZSBkYXRhIGlzIGF2YWlsYWJsZS48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IHYtZWxzZT5cXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmFjZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Mb2NhdGlvbjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRyaXZlcjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFsaWZpZWQ8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RmluaXNoZWQ8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5IHYtZm9yPVxcXCJyYWNlIGluIHJhY2VzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dzcGFuPVxcXCIyXFxcIiBjbGFzcz1cXFwidGFsbC1jb2xcXFwiPjxyb3V0ZXItbGluayA6dG89XFxcIicvcmFjZXMvJyArIHJhY2Uucm91bmRcXFwiPjxhPnt7cmFjZS5yYWNlTmFtZX19PC9hPjwvcm91dGVyLWxpbms+PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHJvd3NwYW49XFxcIjJcXFwiIGNsYXNzPVxcXCJ0YWxsLWNvbFxcXCI+e3tyYWNlLkNpcmN1aXQuTG9jYXRpb24ubG9jYWxpdHkgKyAnLCAnICsgcmFjZS5DaXJjdWl0LkxvY2F0aW9uLmNvdW50cnl9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dzcGFuPVxcXCIyXFxcIiBjbGFzcz1cXFwidGFsbC1jb2xcXFwiPnt7cmFjZS5kYXRlfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImFjdGl2ZVxcXCI+PHJvdXRlci1saW5rIDp0bz1cXFwiJy9kcml2ZXJzLycgKyByYWNlLlJlc3VsdHNbMF0uRHJpdmVyLmRyaXZlcklkXFxcIj48YT57e3JhY2UuUmVzdWx0c1swXS5Ecml2ZXIuZ2l2ZW5OYW1lICsgJyAnICsgcmFjZS5SZXN1bHRzWzBdLkRyaXZlci5mYW1pbHlOYW1lfX08L2E+PC9yb3V0ZXItbGluaz48L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImFjdGl2ZVxcXCI+e3tyYWNlLlJlc3VsdHNbMF0uZ3JpZH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJhY3RpdmVcXFwiIDpjbGFzcz1cXFwieyAnc3VjY2Vzcyc6IHJhY2UuUmVzdWx0c1swXS5wb3NpdGlvbiA9PT0gJzEnIH1cXFwiPnt7cmFjZS5SZXN1bHRzWzBdLnBvc2l0aW9ufX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVxcXCJhY3RpdmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cXFwiJy9kcml2ZXJzLycgKyByYWNlLlJlc3VsdHNbMV0uRHJpdmVyLmRyaXZlcklkXFxcIj48YT57e3JhY2UuUmVzdWx0c1sxXS5Ecml2ZXIuZ2l2ZW5OYW1lICsgJyAnICsgcmFjZS5SZXN1bHRzWzFdLkRyaXZlci5mYW1pbHlOYW1lfX08L2E+PC9yb3V0ZXItbGluaz48L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tyYWNlLlJlc3VsdHNbMV0uZ3JpZH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIDpjbGFzcz1cXFwieyAnc3VjY2Vzcyc6IHJhY2UuUmVzdWx0c1sxXS5wb3NpdGlvbiA9PT0gJzEnIH1cXFwiPnt7cmFjZS5SZXN1bHRzWzFdLnBvc2l0aW9ufX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHNjcmlwdD5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgbmFtZTogJ3RlYW0nLFxcbiAgICAgICAgcHJvcHM6IFsnaWQnLCAneWVhciddLFxcbiAgICAgICAgZGF0YTogKCkgPT4gKHtcXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxcbiAgICAgICAgICAgIGxvYWRpbmdSYWNlczogdHJ1ZSxcXG4gICAgICAgICAgICB0ZWFtOiB7fSxcXG4gICAgICAgICAgICByYWNlczogW10sXFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxcbiAgICAgICAgICAgIGVycm9yUmFjZXM6IGZhbHNlXFxuICAgICAgICB9KSxcXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICBnZXREYXRhKCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdSYWNlcyA9IHRydWU7XFxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvclJhY2VzID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAuZ2V0KCcvL2VyZ2FzdC5jb20vYXBpL2YxLycgKyB0aGlzLnllYXIgKyAnL2NvbnN0cnVjdG9ycy8nICsgdGhpcy5pZCArICcvY29uc3RydWN0b3JTdGFuZGluZ3MuanNvbicpLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYm9keS5NUkRhdGEuU3RhbmRpbmdzVGFibGUuU3RhbmRpbmdzTGlzdHMubGVuZ3RoID4gMCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVhbSA9IHJlc3BvbnNlLmJvZHkuTVJEYXRhLlN0YW5kaW5nc1RhYmxlLlN0YW5kaW5nc0xpc3RzWzBdLkNvbnN0cnVjdG9yU3RhbmRpbmdzWzBdO1xcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZWFtIGRldGFpbHMgZXJyb3InLCByZXNwb25zZSk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLmdldCgnLy9lcmdhc3QuY29tL2FwaS9mMS8nICsgdGhpcy55ZWFyICsgJy9jb25zdHJ1Y3RvcnMvJyArIHRoaXMuaWQgKyAnL3Jlc3VsdHMuanNvbicpLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nUmFjZXMgPSBmYWxzZTtcXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5ib2R5Lk1SRGF0YS5SYWNlVGFibGUuUmFjZXMubGVuZ3RoID4gMCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmFjZXMgPSByZXNwb25zZS5ib2R5Lk1SRGF0YS5SYWNlVGFibGUuUmFjZXM7XFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JSYWNlcyA9IHRydWU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1JhY2VzID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yUmFjZXMgPSB0cnVlO1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RlYW0gZHJpdmVycyBlcnJvcicsIHJlc3BvbnNlKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICAgICAgaWYgKHRoaXMueWVhciAhPT0gJycpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIHdhdGNoOiB7XFxuICAgICAgICAgICAgeWVhcjogZnVuY3Rpb24odmFsdWUpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4gICAgLnRhYmxlPnRib2R5PnRyPnRkLnRhbGwtY29sIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIH1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTcyYTI3ODBkXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1RlYW0udnVlXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiQXBwLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2JhNWJkOTBcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGlkPVwiYXBwXCI+XG4gICAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5hdmJhci10b2dnbGUgY29sbGFwc2VkXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+RjEgRGF0YSBBcHA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdGFnPVwibGlcIiB0bz1cIi90ZWFtc1wiIGV4YWN0LWFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiIGFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiPjxhPlRlYW1zPC9hPjwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdGFnPVwibGlcIiB0bz1cIi9kcml2ZXJzXCIgZXhhY3QtYWN0aXZlLWNsYXNzPVwiYWN0aXZlXCIgYWN0aXZlLWNsYXNzPVwiYWN0aXZlXCI+PGE+RHJpdmVyczwvYT48L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRhZz1cImxpXCIgdG89XCIvcmFjZXNcIiBleGFjdC1hY3RpdmUtY2xhc3M9XCJhY3RpdmVcIiBhY3RpdmUtY2xhc3M9XCJhY3RpdmVcIj48YT5SYWNlczwvYT48L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2YmFyLWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8eWVhcnMgQHVwZGF0ZT1cInVwZGF0ZVllYXJcIj48L3llYXJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPG1haW4gY2xhc3M9XCJjb250YWluZXJcIiBpZD1cIm1haW5cIj5cbiAgICAgICAgICAgIDxyb3V0ZXItdmlldyA6eWVhcj1cInllYXJcIj48L3JvdXRlci12aWV3PlxuICAgICAgICA8L21haW4+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBWdWUgZnJvbSAndnVlJztcbiAgICBpbXBvcnQgWWVhcnMgZnJvbSAnLi9jb21wb25lbnRzL1llYXJzLnZ1ZSc7XG4gICAgVnVlLmNvbXBvbmVudChZZWFycy5uYW1lLCBZZWFycyk7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnYXBwJyxcbiAgICAgICAgZGF0YTogKCkgPT4gKHtcbiAgICAgICAgICAgIHllYXI6ICcnXG4gICAgICAgIH0pLFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB1cGRhdGVZZWFyOiBmdW5jdGlvbih5ZWFyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55ZWFyID0geWVhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0FwcC52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiB2LWlmPVwibG9hZGluZ1wiPkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgPGRpdiB2LWVsc2UtaWY9XCJlcnJvclwiPkFuIGVycm9yIGhhcyBvY2N1cnJlZC4gTm8gZHJpdmVyIGRhdGEgaXMgYXZhaWxhYmxlLjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJpdmVyXCIgdi1lbHNlPlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwiZHJpdmVyLW5hbWVcIj57e2RyaXZlci5Ecml2ZXIuZ2l2ZW5OYW1lfX0mbmJzcDt7e2RyaXZlci5Ecml2ZXIuZmFtaWx5TmFtZX19ICZtZGFzaDsge3t5ZWFyfX0gU2Vhc29uPC9oMT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+TmF0aW9uYWxpdHk6PC9zdHJvbmc+IHt7ZHJpdmVyLkRyaXZlci5uYXRpb25hbGl0eX19IDxicj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPlRlYW1zOjwvc3Ryb25nPiBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1mb3I9XCIodGVhbSwgaW5kZXgpIGluIGRyaXZlci5Db25zdHJ1Y3RvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCInL3RlYW1zLycgKyB0ZWFtLmNvbnN0cnVjdG9ySWRcIj48YT57e3RlYW0ubmFtZX19PC9hPjwvcm91dGVyLWxpbms+PHNwYW4gdi1pZj1cImluZGV4KzEgPCBkcml2ZXIuQ29uc3RydWN0b3JzLmxlbmd0aFwiPiwgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IDxicj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkJpcnRoZGF5Ojwvc3Ryb25nPiB7e2RyaXZlci5Ecml2ZXIuZGF0ZU9mQmlydGh9fSA8YnI+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD48YSA6aHJlZj1cImRyaXZlci5Ecml2ZXIudXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5XaWtpcGVkaWEgQmlvPC9hPjwvcD5cblxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPnt7eWVhcn19IFdpbnM6PC9zdHJvbmc+IHt7ZHJpdmVyLndpbnN9fTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+UG9pbnRzOjwvc3Ryb25nPiB7e2RyaXZlci5wb2ludHN9fTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+V0RDIFBvc2l0aW9uOjwvc3Ryb25nPiB7e2RyaXZlci5wb3NpdGlvbn19PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+UmVzdWx0czwvaDI+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkaW5nUmFjZXNcIj5Mb2FkaW5nIHJhY2UgZGF0YS4uLjwvZGl2PlxuICAgICAgICAgICAgPGRpdiB2LWVsc2UtaWY9XCJlcnJvclJhY2VzXCI+QW4gZXJyb3IgaGFzIG9jY3VycmVkLiBObyByYWNlIGRhdGEgaXMgYXZhaWxhYmxlLjwvZGl2PlxuICAgICAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Sb3VuZDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkdyYW5kIFByaXg8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UZWFtPC90aD4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YWxpZmllZDwvdGg+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GaW5pc2hlZDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJyYWNlIGluIHJhY2VzXCIgOmNsYXNzPVwieyAnc3VjY2Vzcyc6IHJhY2UuUmVzdWx0c1swXS5wb3NpdGlvbiA9PT0gJzEnIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tyYWNlLnJvdW5kfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwiJy9yYWNlcy8nICsgcmFjZS5yb3VuZFwiPjxhPnt7cmFjZS5yYWNlTmFtZX19PC9hPjwvcm91dGVyLWxpbms+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cIicvdGVhbXMvJyArIHJhY2UuUmVzdWx0c1swXS5Db25zdHJ1Y3Rvci5jb25zdHJ1Y3RvcklkXCI+PGE+e3tyYWNlLlJlc3VsdHNbMF0uQ29uc3RydWN0b3IubmFtZX19PC9hPjwvcm91dGVyLWxpbms+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tyYWNlLlJlc3VsdHNbMF0uZ3JpZH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tyYWNlLlJlc3VsdHNbMF0ucG9zaXRpb259fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdkcml2ZXInLFxuICAgICAgICBwcm9wczogWydpZCcsICd5ZWFyJ10sXG4gICAgICAgIGRhdGE6ICgpID0+ICh7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgbG9hZGluZ1JhY2VzOiB0cnVlLFxuICAgICAgICAgICAgZHJpdmVyOiB7fSxcbiAgICAgICAgICAgIHJhY2VzOiBbXSxcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yUmFjZXM6IGZhbHNlXG4gICAgICAgIH0pLFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXREYXRhKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nUmFjZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yUmFjZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLmdldCgnLy9lcmdhc3QuY29tL2FwaS9mMS8nICsgdGhpcy55ZWFyICsgJy9kcml2ZXJzLycgKyB0aGlzLmlkICsgJy9kcml2ZXJTdGFuZGluZ3MuanNvbicpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmJvZHkuTVJEYXRhLlN0YW5kaW5nc1RhYmxlLlN0YW5kaW5nc0xpc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJpdmVyID0gcmVzcG9uc2UuYm9keS5NUkRhdGEuU3RhbmRpbmdzVGFibGUuU3RhbmRpbmdzTGlzdHNbMF0uRHJpdmVyU3RhbmRpbmdzWzBdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RyaXZlciBhcGkgZXJyb3InLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoJy8vZXJnYXN0LmNvbS9hcGkvZjEvJyArIHRoaXMueWVhciArICcvZHJpdmVycy8nICsgdGhpcy5pZCArICcvcmVzdWx0cy5qc29uJykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1JhY2VzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5ib2R5Lk1SRGF0YS5SYWNlVGFibGUuUmFjZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWNlcyA9IHJlc3BvbnNlLmJvZHkuTVJEYXRhLlJhY2VUYWJsZS5SYWNlcztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JSYWNlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1JhY2VzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JSYWNlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyYWNlcyBhcGkgZXJyb3InLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy55ZWFyICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgeWVhcjogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvRHJpdmVyLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZHJpdmVyc1wiPlxuICAgICAgICA8aDE+RHJpdmVycyAmbWRhc2g7IHt7eWVhcn19IFNlYXNvbjwvaDE+XG4gICAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgIDxkaXYgdi1lbHNlLWlmPVwiZXJyb3JcIj5BbiBlcnJvciBoYXMgb2NjdXJyZWQuIE5vIGRyaXZlciBkYXRhIGlzIGF2YWlsYWJsZS48L2Rpdj5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZFwiIHYtZWxzZT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCB2LW9uOmNsaWNrPVwic29ydERyaXZlcnMoJ2ZhbWlseU5hbWUnKVwiIDpjbGFzcz1cInsnYWN0aXZlJzogc29ydCA9PT0gJ2ZhbWlseU5hbWUnfVwiPk5hbWUgPHNwYW4gY2xhc3M9XCJjYXJldFwiIDpjbGFzcz1cInsgJ3JldmVyc2VkJzogcmV2ZXJzZWQgfVwiIHYtaWY9XCJzb3J0ID09PSAnZmFtaWx5TmFtZSdcIj48L3NwYW4+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHYtb246Y2xpY2s9XCJzb3J0RHJpdmVycygnQ29uc3RydWN0b3JzJylcIiA6Y2xhc3M9XCJ7J2FjdGl2ZSc6IHNvcnQgPT09ICdDb25zdHJ1Y3RvcnMnfVwiPlRlYW1zIDxzcGFuIGNsYXNzPVwiY2FyZXRcIiA6Y2xhc3M9XCJ7ICdyZXZlcnNlZCc6IHJldmVyc2VkIH1cIiB2LWlmPVwic29ydCA9PT0gJ0NvbnN0cnVjdG9ycydcIj48L3NwYW4+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHYtb246Y2xpY2s9XCJzb3J0RHJpdmVycygnbmF0aW9uYWxpdHknKVwiIDpjbGFzcz1cInsnYWN0aXZlJzogc29ydCA9PT0gJ25hdGlvbmFsaXR5J31cIj5OYXRpb25hbGl0eSA8c3BhbiBjbGFzcz1cImNhcmV0XCIgOmNsYXNzPVwieyAncmV2ZXJzZWQnOiByZXZlcnNlZCB9XCIgdi1pZj1cInNvcnQgPT09ICduYXRpb25hbGl0eSdcIj48L3NwYW4+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHYtb246Y2xpY2s9XCJzb3J0RHJpdmVycygncG9pbnRzJylcIiA6Y2xhc3M9XCJ7J2FjdGl2ZSc6IHNvcnQgPT09ICdwb2ludHMnfVwiPlBvaW50cyA8c3BhbiBjbGFzcz1cImNhcmV0XCIgOmNsYXNzPVwieyAncmV2ZXJzZWQnOiByZXZlcnNlZCB9XCIgdi1pZj1cInNvcnQgPT09ICdwb2ludHMnXCI+PC9zcGFuPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCB2LW9uOmNsaWNrPVwic29ydERyaXZlcnMoJ3dpbnMnKVwiIDpjbGFzcz1cInsnYWN0aXZlJzogc29ydCA9PT0gJ3dpbnMnfVwiPldpbnMgPHNwYW4gY2xhc3M9XCJjYXJldFwiIDpjbGFzcz1cInsgJ3JldmVyc2VkJzogcmV2ZXJzZWQgfVwiIHYtaWY9XCJzb3J0ID09PSAnd2lucydcIj48L3NwYW4+PC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJkcml2ZXIgaW4gZHJpdmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cIicvZHJpdmVycy8nICsgZHJpdmVyLkRyaXZlci5kcml2ZXJJZFwiPjxhPnt7ZHJpdmVyLkRyaXZlci5naXZlbk5hbWUgKyAnICcgKyBkcml2ZXIuRHJpdmVyLmZhbWlseU5hbWV9fTwvYT48L3JvdXRlci1saW5rPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZm9yPVwiKHRlYW0sIGluZGV4KSBpbiBkcml2ZXIuQ29uc3RydWN0b3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cIicvdGVhbXMvJyArIHllYXIgKyAnLycgKyB0ZWFtLmNvbnN0cnVjdG9ySWRcIj48YT57e3RlYW0ubmFtZX19PC9hPjwvcm91dGVyLWxpbms+PHNwYW4gdi1pZj1cImluZGV4KzEgPCBkcml2ZXIuQ29uc3RydWN0b3JzLmxlbmd0aFwiPiwgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3tkcml2ZXIuRHJpdmVyLm5hdGlvbmFsaXR5fX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3tkcml2ZXIucG9pbnRzfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3tkcml2ZXIud2luc319PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnZHJpdmVycycsXG4gICAgICAgIHByb3BzOiBbJ3llYXInXSxcbiAgICAgICAgZGF0YTogKCkgPT4gKHtcbiAgICAgICAgICAgIGRyaXZlcnM6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHNvcnQ6ICdwb2ludHMnLFxuICAgICAgICAgICAgcmV2ZXJzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlXG4gICAgICAgIH0pLFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXREYXRhKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAuZ2V0KCcvL2VyZ2FzdC5jb20vYXBpL2YxLycgKyB0aGlzLnllYXIgKyAnL2RyaXZlclN0YW5kaW5ncy5qc29uJykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYm9keS5NUkRhdGEuU3RhbmRpbmdzVGFibGUuU3RhbmRpbmdzTGlzdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcml2ZXJzID0gcmVzcG9uc2UuYm9keS5NUkRhdGEuU3RhbmRpbmdzVGFibGUuU3RhbmRpbmdzTGlzdHNbMF0uRHJpdmVyU3RhbmRpbmdzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0ID0gJ3BvaW50cyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJldmVyc2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc29ydERyaXZlcnMocHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlyc3QsIHNlY29uZDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3J0ID09PSBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyaXZlcnMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldmVyc2VkID0gIXRoaXMucmV2ZXJzZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0ID0gcHJvcGVydHk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV2ZXJzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcml2ZXJzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ3BvaW50cycgfHwgcHJvcGVydHkgPT09ICd3aW5zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0ID0gcGFyc2VJbnQoYVtwcm9wZXJ0eV0sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmQgPSBwYXJzZUludChiW3Byb3BlcnR5XSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gJ0NvbnN0cnVjdG9ycycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IGEuQ29uc3RydWN0b3JzWzBdLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gYi5Db25zdHJ1Y3RvcnNbMF0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSBhLkRyaXZlcltwcm9wZXJ0eV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmQgPSBiLkRyaXZlcltwcm9wZXJ0eV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdCA8IHNlY29uZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3QgPiBzZWNvbmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ3BvaW50cycgfHwgcHJvcGVydHkgPT09ICd3aW5zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcml2ZXJzLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnllYXIgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICB5ZWFyOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIHRoIHtcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgfVxuICAgIHRoLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiM0MjhiY2E7XG4gICAgfVxuICAgIC5jYXJldC5yZXZlcnNlZCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvRHJpdmVycy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiB2LWlmPVwibG9hZGluZ1wiPkxvYWRpbmcuLi48L2Rpdj5cbiAgICA8ZGl2IHYtZWxzZS1pZj1cImVycm9yXCI+QW4gZXJyb3IgaGFzIG9jY3VycmVkLiBObyByYWNlIGRhdGEgaXMgYXZhaWxhYmxlLjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyYWNlXCIgdi1lbHNlPlxuICAgICAgICA8aDEgY2xhc3M9XCJyYWNlLW5hbWVcIj57e3JhY2UucmFjZU5hbWV9fSAmbWRhc2g7IHt7eWVhcn19IFNlYXNvbjwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5EYXRlOjwvc3Ryb25nPiB7e3JhY2UuZGF0ZX19IDxicj5cbiAgICAgICAgICAgIDxzdHJvbmc+Q2lyY3VpdDo8L3N0cm9uZz4ge3tyYWNlLkNpcmN1aXQuY2lyY3VpdE5hbWV9fSA8YnI+XG4gICAgICAgICAgICA8c3Ryb25nPkxvY2F0aW9uOjwvc3Ryb25nPiB7e3JhY2UuQ2lyY3VpdC5Mb2NhdGlvbi5sb2NhbGl0eX19LCB7e3JhY2UuQ2lyY3VpdC5Mb2NhdGlvbi5jb3VudHJ5fX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIDpocmVmPVwicmFjZS51cmxcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPlJhY2UgV2lraXBlZGlhIEJpbzwvYT4gXG4gICAgICAgICAgICA8YSA6aHJlZj1cInJhY2UuQ2lyY3VpdC51cmxcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPkNpcmN1aXQgV2lraXBlZGlhIEJpbzwvYT4gXG4gICAgICAgICAgICA8YSA6aHJlZj1cImBodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoLz9hcGk9MSZxdWVyeT0ke3JhY2UuQ2lyY3VpdC5Mb2NhdGlvbi5sYXR9LCR7cmFjZS5DaXJjdWl0LkxvY2F0aW9uLmxvbmd9YFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+VmlldyBvbiBHb29nbGUgTWFwczwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8aDI+UmVzdWx0czwvaDI+XG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5Qb3NpdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5Ecml2ZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+VGVhbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5RdWFsaWZpZWQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJkcml2ZXIgaW4gcmFjZS5SZXN1bHRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e2RyaXZlci5wb3NpdGlvbn19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCInL2RyaXZlcnMvJyArIGRyaXZlci5Ecml2ZXIuZHJpdmVySWRcIj48YT57e2RyaXZlci5Ecml2ZXIuZ2l2ZW5OYW1lfX0ge3tkcml2ZXIuRHJpdmVyLmZhbWlseU5hbWV9fTwvYT48L3JvdXRlci1saW5rPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwiJy90ZWFtcy8nICsgZHJpdmVyLkNvbnN0cnVjdG9yLmNvbnN0cnVjdG9ySWRcIj48YT57e2RyaXZlci5Db25zdHJ1Y3Rvci5uYW1lfX08L2E+PC9yb3V0ZXItbGluaz48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3tkcml2ZXIuZ3JpZH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7ZHJpdmVyLmxhcHN9fSBsYXBzICZuZGFzaDsge3tkcml2ZXIuc3RhdHVzfX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAndnVlJyxcbiAgICAgICAgcHJvcHM6IFsnaWQnLCAneWVhciddLFxuICAgICAgICBkYXRhOiAoKSA9PiAoe1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHJhY2U6IHt9LFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlXG4gICAgICAgIH0pLFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRSYWNlSW5mbygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLmdldCgnLy9lcmdhc3QuY29tL2FwaS9mMS8nICsgdGhpcy55ZWFyICsgJy8nICsgdGhpcy5pZCArICcvcmVzdWx0cy5qc29uJykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYm9keS5NUkRhdGEuUmFjZVRhYmxlLlJhY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmFjZSA9IHJlc3BvbnNlLmJvZHkuTVJEYXRhLlJhY2VUYWJsZS5SYWNlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnllYXIgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSYWNlSW5mbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgeWVhcjogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJhY2VJbmZvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL1JhY2UudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJyYWNlc1wiPlxuICAgICAgICA8aDE+UmFjZXMgJm1kYXNoOyB7e3llYXJ9fSBTZWFzb248L2gxPlxuICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkaW5nXCI+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cImVycm9yXCI+QW4gZXJyb3IgaGFzIG9jY3VycmVkLiBObyByYWNlIGRhdGEgaXMgYXZhaWxhYmxlLjwvZGl2PlxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCIgdi1lbHNlPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5DaXJjdWl0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkxvY2F0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPldpbm5pbmcgRHJpdmVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPldpbm5pbmcgVGVhbTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwicmFjZSBpbiByYWNlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cIicvcmFjZXMvJyArIHJhY2Uucm91bmRcIj48YT57e3JhY2UucmFjZU5hbWV9fTwvYT48L3JvdXRlci1saW5rPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3JhY2UuZGF0ZX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7cmFjZS5DaXJjdWl0LmNpcmN1aXROYW1lfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3tyYWNlLkNpcmN1aXQuTG9jYXRpb24ubG9jYWxpdHl9fSwge3tyYWNlLkNpcmN1aXQuTG9jYXRpb24uY291bnRyeX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCInL2RyaXZlcnMvJyArIHJhY2UuUmVzdWx0c1swXS5Ecml2ZXIuZHJpdmVySWRcIj48YT57e3JhY2UuUmVzdWx0c1swXS5Ecml2ZXIuZ2l2ZW5OYW1lfX0ge3tyYWNlLlJlc3VsdHNbMF0uRHJpdmVyLmZhbWlseU5hbWV9fTwvYT48L3JvdXRlci1saW5rPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwiJy90ZWFtcy8nICsgcmFjZS5SZXN1bHRzWzBdLkNvbnN0cnVjdG9yLmNvbnN0cnVjdG9ySWRcIj48YT57e3JhY2UuUmVzdWx0c1swXS5Db25zdHJ1Y3Rvci5uYW1lfX08L2E+PC9yb3V0ZXItbGluaz48L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAncmFjZXMnLFxuICAgICAgICBwcm9wczogWyd5ZWFyJ10sXG4gICAgICAgIGRhdGE6ICgpID0+ICh7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcmFjZXM6IFtdLFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlXG4gICAgICAgIH0pLFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRSYWNlcygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLmdldCgnLy9lcmdhc3QuY29tL2FwaS9mMS8nICsgdGhpcy55ZWFyICsgJy9yZXN1bHRzLzEuanNvbicpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmJvZHkuTVJEYXRhLlJhY2VUYWJsZS5SYWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJhY2VzID0gcmVzcG9uc2UuYm9keS5NUkRhdGEuUmFjZVRhYmxlLlJhY2VzO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMueWVhciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJhY2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICB5ZWFyOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmFjZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvUmFjZXMudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgIDxkaXYgdi1lbHNlLWlmPVwiZXJyb3JcIj5BbiBlcnJvciBoYXMgb2NjdXJyZWQuIE5vIHRlYW0gZGF0YSBpcyBhdmFpbGFibGUuPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtXCIgdi1lbHNlPlxuICAgICAgICAgICAgPGgxPnt7IHRlYW0uQ29uc3RydWN0b3IubmFtZSB9fSAmbWRhc2g7IHt7IHllYXIgfX0gU2Vhc29uPC9oMT5cbiAgICAgICAgICAgIDxwPjxzdHJvbmc+TmF0aW9uYWxpdHk6PC9zdHJvbmc+IHt7dGVhbS5Db25zdHJ1Y3Rvci5uYXRpb25hbGl0eX19PC9wPlxuICAgICAgICAgICAgPHA+PGEgOmhyZWY9XCJ0ZWFtLkNvbnN0cnVjdG9yLnVybFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+V2lraXBlZGlhIEJpbzwvYT48L3A+XG5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+e3t5ZWFyfX0gV2luczoge3t0ZWFtLndpbnN9fTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlBvaW50czoge3t0ZWFtLnBvaW50c319PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+V0NDIFBvc2l0aW9uOiB7e3RlYW0ucG9zaXRpb259fTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPlJlc3VsdHM8L2gyPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9hZGluZ1JhY2VzXCI+TG9hZGluZyByYWNlIGRhdGEuLi48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwiZXJyb3JSYWNlc1wiPkFuIGVycm9yIGhhcyBvY2N1cnJlZC4gTm8gcmFjZSBkYXRhIGlzIGF2YWlsYWJsZS48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmFjZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxvY2F0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRyaXZlcjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YWxpZmllZDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZpbmlzaGVkPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keSB2LWZvcj1cInJhY2UgaW4gcmFjZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgcm93c3Bhbj1cIjJcIiBjbGFzcz1cInRhbGwtY29sXCI+PHJvdXRlci1saW5rIDp0bz1cIicvcmFjZXMvJyArIHJhY2Uucm91bmRcIj48YT57e3JhY2UucmFjZU5hbWV9fTwvYT48L3JvdXRlci1saW5rPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHJvd3NwYW49XCIyXCIgY2xhc3M9XCJ0YWxsLWNvbFwiPnt7cmFjZS5DaXJjdWl0LkxvY2F0aW9uLmxvY2FsaXR5ICsgJywgJyArIHJhY2UuQ2lyY3VpdC5Mb2NhdGlvbi5jb3VudHJ5fX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dzcGFuPVwiMlwiIGNsYXNzPVwidGFsbC1jb2xcIj57e3JhY2UuZGF0ZX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJhY3RpdmVcIj48cm91dGVyLWxpbmsgOnRvPVwiJy9kcml2ZXJzLycgKyByYWNlLlJlc3VsdHNbMF0uRHJpdmVyLmRyaXZlcklkXCI+PGE+e3tyYWNlLlJlc3VsdHNbMF0uRHJpdmVyLmdpdmVuTmFtZSArICcgJyArIHJhY2UuUmVzdWx0c1swXS5Ecml2ZXIuZmFtaWx5TmFtZX19PC9hPjwvcm91dGVyLWxpbms+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJhY3RpdmVcIj57e3JhY2UuUmVzdWx0c1swXS5ncmlkfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFjdGl2ZVwiIDpjbGFzcz1cInsgJ3N1Y2Nlc3MnOiByYWNlLlJlc3VsdHNbMF0ucG9zaXRpb24gPT09ICcxJyB9XCI+e3tyYWNlLlJlc3VsdHNbMF0ucG9zaXRpb259fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCInL2RyaXZlcnMvJyArIHJhY2UuUmVzdWx0c1sxXS5Ecml2ZXIuZHJpdmVySWRcIj48YT57e3JhY2UuUmVzdWx0c1sxXS5Ecml2ZXIuZ2l2ZW5OYW1lICsgJyAnICsgcmFjZS5SZXN1bHRzWzFdLkRyaXZlci5mYW1pbHlOYW1lfX08L2E+PC9yb3V0ZXItbGluaz48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3JhY2UuUmVzdWx0c1sxXS5ncmlkfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA6Y2xhc3M9XCJ7ICdzdWNjZXNzJzogcmFjZS5SZXN1bHRzWzFdLnBvc2l0aW9uID09PSAnMScgfVwiPnt7cmFjZS5SZXN1bHRzWzFdLnBvc2l0aW9ufX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAndGVhbScsXG4gICAgICAgIHByb3BzOiBbJ2lkJywgJ3llYXInXSxcbiAgICAgICAgZGF0YTogKCkgPT4gKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBsb2FkaW5nUmFjZXM6IHRydWUsXG4gICAgICAgICAgICB0ZWFtOiB7fSxcbiAgICAgICAgICAgIHJhY2VzOiBbXSxcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yUmFjZXM6IGZhbHNlXG4gICAgICAgIH0pLFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXREYXRhKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nUmFjZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yUmFjZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLmdldCgnLy9lcmdhc3QuY29tL2FwaS9mMS8nICsgdGhpcy55ZWFyICsgJy9jb25zdHJ1Y3RvcnMvJyArIHRoaXMuaWQgKyAnL2NvbnN0cnVjdG9yU3RhbmRpbmdzLmpzb24nKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5ib2R5Lk1SRGF0YS5TdGFuZGluZ3NUYWJsZS5TdGFuZGluZ3NMaXN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlYW0gPSByZXNwb25zZS5ib2R5Lk1SRGF0YS5TdGFuZGluZ3NUYWJsZS5TdGFuZGluZ3NMaXN0c1swXS5Db25zdHJ1Y3RvclN0YW5kaW5nc1swXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZWFtIGRldGFpbHMgZXJyb3InLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoJy8vZXJnYXN0LmNvbS9hcGkvZjEvJyArIHRoaXMueWVhciArICcvY29uc3RydWN0b3JzLycgKyB0aGlzLmlkICsgJy9yZXN1bHRzLmpzb24nKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nUmFjZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmJvZHkuTVJEYXRhLlJhY2VUYWJsZS5SYWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJhY2VzID0gcmVzcG9uc2UuYm9keS5NUkRhdGEuUmFjZVRhYmxlLlJhY2VzO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvclJhY2VzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nUmFjZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvclJhY2VzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RlYW0gZHJpdmVycyBlcnJvcicsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnllYXIgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICB5ZWFyOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgLnRhYmxlPnRib2R5PnRyPnRkLnRhbGwtY29sIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9UZWFtLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwidGVhbXNcIj5cbiAgICAgICAgPGgxPlRlYW1zICZtZGFzaDsge3t5ZWFyfX0gU2Vhc29uPC9oMT5cbiAgICAgICAgPGRpdiB2LWlmPVwibG9hZGluZ1wiPkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgPGRpdiB2LWVsc2UtaWY9XCJlcnJvclwiPkFuIGVycm9yIGhhcyBvY2N1cnJlZC4gTm8gdGVhbSBkYXRhIGlzIGF2YWlsYWJsZS48L2Rpdj5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZFwiIHYtZWxzZT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hdGlvbmFsaXR5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlBvaW50czwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5XaW5zPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJ0ZWFtIGluIHRlYW1zXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwiJy90ZWFtcy8nICsgdGVhbS5Db25zdHJ1Y3Rvci5jb25zdHJ1Y3RvcklkXCI+PGE+e3t0ZWFtLkNvbnN0cnVjdG9yLm5hbWV9fTwvYT48L3JvdXRlci1saW5rPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3RlYW0uQ29uc3RydWN0b3IubmF0aW9uYWxpdHl9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3RlYW0ucG9pbnRzfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3t0ZWFtLndpbnN9fTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ3RlYW1zJyxcbiAgICAgICAgcHJvcHM6IFsneWVhciddLFxuICAgICAgICBkYXRhOiAoKSA9PiAoe1xuICAgICAgICAgICAgdGVhbXM6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZVxuICAgICAgICB9KSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLmdldCgnLy9lcmdhc3QuY29tL2FwaS9mMS8nICsgdGhpcy55ZWFyICsgJy9jb25zdHJ1Y3RvclN0YW5kaW5ncy5qc29uJykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYm9keS5NUkRhdGEuU3RhbmRpbmdzVGFibGUuU3RhbmRpbmdzTGlzdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWFtcyA9IHJlc3BvbnNlLmJvZHkuTVJEYXRhLlN0YW5kaW5nc1RhYmxlLlN0YW5kaW5nc0xpc3RzWzBdLkNvbnN0cnVjdG9yU3RhbmRpbmdzO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMueWVhciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHllYXI6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL1RlYW1zLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwieWVhcnMgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInllYXItc2VsZWN0XCI+WWVhcjo8L2xhYmVsPiAgXG4gICAgICAgIDxzZWxlY3QgaWQ9XCJ5ZWFyLXNlbGVjdFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInllYXJcIiBAY2hhbmdlPVwidXBkYXRlWWVhcigkZXZlbnQudGFyZ2V0LnZhbHVlKVwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cInllYXJWYWx1ZSBpbiB5ZWFyc1wiIDp2YWx1ZT1cInllYXJWYWx1ZVwiPnt7eWVhclZhbHVlfX08L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICd5ZWFycycsXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHllYXI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGxhc3RZZWFyKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWVhcnMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJZZWFyID0gdGhpcy5sYXN0WWVhcjtcbiAgICAgICAgICAgICAgICB2YXIgeWVhcnNBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIHllYXJzQXJyYXkucHVzaChjdXJyWWVhcik7XG4gICAgICAgICAgICAgICAgICBjdXJyWWVhci0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geWVhcnNBcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdXBkYXRlWWVhcjogZnVuY3Rpb24oeWVhcikge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScsIHllYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy55ZWFyID0gdGhpcy5sYXN0WWVhcjtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlWWVhcih0aGlzLnllYXIpO1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9ZZWFycy52dWUiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IFRlYW1zIGZyb20gJy4uL2NvbXBvbmVudHMvVGVhbXMnO1xuaW1wb3J0IFRlYW0gZnJvbSAnLi4vY29tcG9uZW50cy9UZWFtJztcbmltcG9ydCBEcml2ZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvRHJpdmVycyc7XG5pbXBvcnQgRHJpdmVyIGZyb20gJy4uL2NvbXBvbmVudHMvRHJpdmVyJztcbmltcG9ydCBSYWNlcyBmcm9tICcuLi9jb21wb25lbnRzL1JhY2VzJztcbmltcG9ydCBSYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvUmFjZSc7XG5cblZ1ZS51c2UoUm91dGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJvdXRlcih7XG4gICAgcm91dGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICcvdGVhbXMnLFxuICAgICAgICAgICAgbmFtZTogJ1RlYW1zJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogVGVhbXNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJy90ZWFtcy86aWQnLFxuICAgICAgICAgICAgbmFtZTogJ1RlYW0nLFxuICAgICAgICAgICAgY29tcG9uZW50OiBUZWFtLFxuICAgICAgICAgICAgcHJvcHM6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJy9kcml2ZXJzJyxcbiAgICAgICAgICAgIG5hbWU6ICdEcml2ZXJzJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogRHJpdmVyc1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnL2RyaXZlcnMvOmlkJyxcbiAgICAgICAgICAgIG5hbWU6ICdEcml2ZXInLFxuICAgICAgICAgICAgY29tcG9uZW50OiBEcml2ZXIsXG4gICAgICAgICAgICBwcm9wczogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnL3JhY2VzJyxcbiAgICAgICAgICAgIG5hbWU6ICdSYWNlcycsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJhY2VzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICcvcmFjZXMvOmlkJyxcbiAgICAgICAgICAgIG5hbWU6ICdSYWNlJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogUmFjZSxcbiAgICAgICAgICAgIHByb3BzOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHsgICBwYXRoOiAnKicsXG4gICAgICAgICAgICByZWRpcmVjdDogJy90ZWFtcycgXG4gICAgICAgIH1cbiAgICBdXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVyL2luZGV4LmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03YmE1YmQ5MFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FwcC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FwcC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTdiYTViZDkwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQXBwLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvQXBwLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03YmE1YmQ5MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdiYTViZDkwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMGY2YWVhNThcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0RyaXZlci52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Ecml2ZXIudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Ecml2ZXIudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wZjZhZWE1OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0RyaXZlci52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvRHJpdmVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wZjZhZWE1OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTBmNmFlYTU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvRHJpdmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zY2MzZmM2YVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ecml2ZXJzLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0RyaXZlcnMudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Ecml2ZXJzLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2NjM2ZjNmFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0RyaXZlcnMudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTNjYzNmYzZhXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0RyaXZlcnMudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTNjYzNmYzZhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtM2NjM2ZjNmFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9Ecml2ZXJzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9SYWNlLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUmFjZS52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTViN2ZiMmZlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUmFjZS52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9SYWNlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01YjdmYjJmZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTViN2ZiMmZlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvUmFjZS52dWVcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUmFjZXMudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9SYWNlcy52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTc5NzA0YWMyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUmFjZXMudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvUmFjZXMudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTc5NzA0YWMyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzk3MDRhYzJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9SYWNlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzJhMjc4MGRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RlYW0udnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVGVhbS52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1RlYW0udnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03MmEyNzgwZFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1RlYW0udnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1RlYW0udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTcyYTI3ODBkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzJhMjc4MGRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9UZWFtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTRmYWE5NFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGVhbXMudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVGVhbXMudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9UZWFtcy52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTM1NGZhYTk0XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVGVhbXMudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1RlYW1zLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zNTRmYWE5NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM1NGZhYTk0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvVGVhbXMudnVlXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1llYXJzLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vWWVhcnMudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01OTkyZGU1NFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1llYXJzLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1llYXJzLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01OTkyZGU1NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU5OTJkZTU0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvWWVhcnMudnVlXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0ubG9hZGluZ1xuICAgICAgPyBfYyhcImRpdlwiLCBbX3ZtLl92KFwiTG9hZGluZy4uLlwiKV0pXG4gICAgICA6IF92bS5lcnJvclxuICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC4gTm8gZHJpdmVyIGRhdGEgaXMgYXZhaWxhYmxlLlwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkcml2ZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwiZHJpdmVyLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmRyaXZlci5Ecml2ZXIuZ2l2ZW5OYW1lKSArXG4gICAgICAgICAgICAgICAgICBcIsKgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5kcml2ZXIuRHJpdmVyLmZhbWlseU5hbWUpICtcbiAgICAgICAgICAgICAgICAgIFwiIOKAlCBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnllYXIpICtcbiAgICAgICAgICAgICAgICAgIFwiIFNlYXNvblwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJOYXRpb25hbGl0eTpcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmRyaXZlci5Ecml2ZXIubmF0aW9uYWxpdHkpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiVGVhbXM6XCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmRyaXZlci5Db25zdHJ1Y3RvcnMsIGZ1bmN0aW9uKHRlYW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIi90ZWFtcy9cIiArIHRlYW0uY29uc3RydWN0b3JJZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJhXCIsIFtfdm0uX3YoX3ZtLl9zKHRlYW0ubmFtZSkpXSldXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleCArIDEgPCBfdm0uZHJpdmVyLkNvbnN0cnVjdG9ycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIsIFwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiQmlydGhkYXk6XCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5kcml2ZXIuRHJpdmVyLmRhdGVPZkJpcnRoKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0uZHJpdmVyLkRyaXZlci51cmwsIHRhcmdldDogXCJfYmxhbmtcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiV2lraXBlZGlhIEJpb1wiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS55ZWFyKSArIFwiIFdpbnM6XCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5kcml2ZXIud2lucykpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiUG9pbnRzOlwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uZHJpdmVyLnBvaW50cykpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiV0RDIFBvc2l0aW9uOlwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uZHJpdmVyLnBvc2l0aW9uKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJSZXN1bHRzXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmxvYWRpbmdSYWNlc1xuICAgICAgICA/IF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJMb2FkaW5nIHJhY2UgZGF0YS4uLlwiKV0pXG4gICAgICAgIDogX3ZtLmVycm9yUmFjZXNcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiQW4gZXJyb3IgaGFzIG9jY3VycmVkLiBObyByYWNlIGRhdGEgaXMgYXZhaWxhYmxlLlwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5yYWNlcywgZnVuY3Rpb24ocmFjZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IHsgc3VjY2VzczogcmFjZS5SZXN1bHRzWzBdLnBvc2l0aW9uID09PSBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhyYWNlLnJvdW5kKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIi9yYWNlcy9cIiArIHJhY2Uucm91bmQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiYVwiLCBbX3ZtLl92KF92bS5fcyhyYWNlLnJhY2VOYW1lKSldKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvdGVhbXMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFjZS5SZXN1bHRzWzBdLkNvbnN0cnVjdG9yLmNvbnN0cnVjdG9ySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocmFjZS5SZXN1bHRzWzBdLkNvbnN0cnVjdG9yLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHJhY2UuUmVzdWx0c1swXS5ncmlkKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHJhY2UuUmVzdWx0c1swXS5wb3NpdGlvbikpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUm91bmRcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiR3JhbmQgUHJpeFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUZWFtXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlF1YWxpZmllZFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJGaW5pc2hlZFwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wZjZhZWE1OFwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wZjZhZWE1OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9Ecml2ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGVhbXNcIiB9LCBbXG4gICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiVGVhbXMg4oCUIFwiICsgX3ZtLl9zKF92bS55ZWFyKSArIFwiIFNlYXNvblwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmxvYWRpbmdcbiAgICAgID8gX2MoXCJkaXZcIiwgW192bS5fdihcIkxvYWRpbmcuLi5cIildKVxuICAgICAgOiBfdm0uZXJyb3JcbiAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJBbiBlcnJvciBoYXMgb2NjdXJyZWQuIE5vIHRlYW0gZGF0YSBpcyBhdmFpbGFibGUuXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtc3RyaXBlZFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRlYW1zLCBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBcIi90ZWFtcy9cIiArIHRlYW0uQ29uc3RydWN0b3IuY29uc3RydWN0b3JJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiYVwiLCBbX3ZtLl92KF92bS5fcyh0ZWFtLkNvbnN0cnVjdG9yLm5hbWUpKV0pXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRlYW0uQ29uc3RydWN0b3IubmF0aW9uYWxpdHkpKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGVhbS5wb2ludHMpKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGVhbS53aW5zKSldKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmF0aW9uYWxpdHlcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUG9pbnRzXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIldpbnNcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMzU0ZmFhOTRcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzU0ZmFhOTRcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVGVhbXMudnVlXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZHJpdmVyc1wiIH0sIFtcbiAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJEcml2ZXJzIOKAlCBcIiArIF92bS5fcyhfdm0ueWVhcikgKyBcIiBTZWFzb25cIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5sb2FkaW5nXG4gICAgICA/IF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJMb2FkaW5nLi4uXCIpXSlcbiAgICAgIDogX3ZtLmVycm9yXG4gICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQW4gZXJyb3IgaGFzIG9jY3VycmVkLiBObyBkcml2ZXIgZGF0YSBpcyBhdmFpbGFibGUuXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtc3RyaXBlZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uc29ydCA9PT0gXCJmYW1pbHlOYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc29ydERyaXZlcnMoXCJmYW1pbHlOYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJOYW1lIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnQgPT09IFwiZmFtaWx5TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyByZXZlcnNlZDogX3ZtLnJldmVyc2VkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uc29ydCA9PT0gXCJDb25zdHJ1Y3RvcnNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0RHJpdmVycyhcIkNvbnN0cnVjdG9yc1wiKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGVhbXMgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uc29ydCA9PT0gXCJDb25zdHJ1Y3RvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgcmV2ZXJzZWQ6IF92bS5yZXZlcnNlZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLnNvcnQgPT09IFwibmF0aW9uYWxpdHlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0RHJpdmVycyhcIm5hdGlvbmFsaXR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJOYXRpb25hbGl0eSBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5zb3J0ID09PSBcIm5hdGlvbmFsaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IHJldmVyc2VkOiBfdm0ucmV2ZXJzZWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IF92bS5zb3J0ID09PSBcInBvaW50c1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnREcml2ZXJzKFwicG9pbnRzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQb2ludHMgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uc29ydCA9PT0gXCJwb2ludHNcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgcmV2ZXJzZWQ6IF92bS5yZXZlcnNlZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLnNvcnQgPT09IFwid2luc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnREcml2ZXJzKFwid2luc1wiKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiV2lucyBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5zb3J0ID09PSBcIndpbnNcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgcmV2ZXJzZWQ6IF92bS5yZXZlcnNlZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmRyaXZlcnMsIGZ1bmN0aW9uKGRyaXZlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IFwiL2RyaXZlcnMvXCIgKyBkcml2ZXIuRHJpdmVyLmRyaXZlcklkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyaXZlci5Ecml2ZXIuZ2l2ZW5OYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJpdmVyLkRyaXZlci5mYW1pbHlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woZHJpdmVyLkNvbnN0cnVjdG9ycywgZnVuY3Rpb24odGVhbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3RlYW1zL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ueWVhciArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uY29uc3RydWN0b3JJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiYVwiLCBbX3ZtLl92KF92bS5fcyh0ZWFtLm5hbWUpKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArIDEgPCBkcml2ZXIuQ29uc3RydWN0b3JzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIsIFwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoZHJpdmVyLkRyaXZlci5uYXRpb25hbGl0eSkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhkcml2ZXIucG9pbnRzKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGRyaXZlci53aW5zKSldKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTNjYzNmYzZhXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTNjYzNmYzZhXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvRHJpdmVycy52dWVcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ5ZWFycyBmb3JtLWlubGluZVwiIH0sIFtcbiAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInllYXItc2VsZWN0XCIgfSB9LCBbX3ZtLl92KFwiWWVhcjpcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJzZWxlY3RcIixcbiAgICAgIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS55ZWFyLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ5ZWFyXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJ5ZWFyLXNlbGVjdFwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgX3ZtLnllYXIgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS51cGRhdGVZZWFyKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3ZtLl9sKF92bS55ZWFycywgZnVuY3Rpb24oeWVhclZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfYyhcIm9wdGlvblwiLCB7IGRvbVByb3BzOiB7IHZhbHVlOiB5ZWFyVmFsdWUgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyh5ZWFyVmFsdWUpKVxuICAgICAgICBdKVxuICAgICAgfSlcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01OTkyZGU1NFwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01OTkyZGU1NFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9ZZWFycy52dWVcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmxvYWRpbmdcbiAgICA/IF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJMb2FkaW5nLi4uXCIpXSlcbiAgICA6IF92bS5lcnJvclxuICAgICAgPyBfYyhcImRpdlwiLCBbX3ZtLl92KFwiQW4gZXJyb3IgaGFzIG9jY3VycmVkLiBObyByYWNlIGRhdGEgaXMgYXZhaWxhYmxlLlwiKV0pXG4gICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmFjZVwiIH0sIFtcbiAgICAgICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwicmFjZS1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnJhY2UucmFjZU5hbWUpICsgXCIg4oCUIFwiICsgX3ZtLl9zKF92bS55ZWFyKSArIFwiIFNlYXNvblwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIkRhdGU6XCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnJhY2UuZGF0ZSkgKyBcIiBcIiksXG4gICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJDaXJjdWl0OlwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5yYWNlLkNpcmN1aXQuY2lyY3VpdE5hbWUpICsgXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiTG9jYXRpb246XCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnJhY2UuQ2lyY3VpdC5Mb2NhdGlvbi5sb2NhbGl0eSkgK1xuICAgICAgICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5yYWNlLkNpcmN1aXQuTG9jYXRpb24uY291bnRyeSkgK1xuICAgICAgICAgICAgICAgIFwiXFxuICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLnJhY2UudXJsLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiUmFjZSBXaWtpcGVkaWEgQmlvXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0ucmFjZS5DaXJjdWl0LnVybCwgdGFyZ2V0OiBcIl9ibGFua1wiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkNpcmN1aXQgV2lraXBlZGlhIEJpb1wiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGhyZWY6XG4gICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC8/YXBpPTEmcXVlcnk9XCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0ucmFjZS5DaXJjdWl0LkxvY2F0aW9uLmxhdCArXG4gICAgICAgICAgICAgICAgICAgIFwiLFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnJhY2UuQ2lyY3VpdC5Mb2NhdGlvbi5sb25nLFxuICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiVmlldyBvbiBHb29nbGUgTWFwc1wiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIlJlc3VsdHNcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgIF92bS5fbChfdm0ucmFjZS5SZXN1bHRzLCBmdW5jdGlvbihkcml2ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGRyaXZlci5wb3NpdGlvbikpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogXCIvZHJpdmVycy9cIiArIGRyaXZlci5Ecml2ZXIuZHJpdmVySWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhkcml2ZXIuRHJpdmVyLmdpdmVuTmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhkcml2ZXIuRHJpdmVyLmZhbWlseU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IFwiL3RlYW1zL1wiICsgZHJpdmVyLkNvbnN0cnVjdG9yLmNvbnN0cnVjdG9ySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImFcIiwgW192bS5fdihfdm0uX3MoZHJpdmVyLkNvbnN0cnVjdG9yLm5hbWUpKV0pXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGRyaXZlci5ncmlkKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhkcml2ZXIubGFwcykgKyBcIiBsYXBzIOKAkyBcIiArIF92bS5fcyhkcml2ZXIuc3RhdHVzKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlBvc2l0aW9uXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkRyaXZlclwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUZWFtXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlF1YWxpZmllZFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTdGF0dXNcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNWI3ZmIyZmVcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWI3ZmIyZmVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvUmFjZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5sb2FkaW5nXG4gICAgICA/IF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJMb2FkaW5nLi4uXCIpXSlcbiAgICAgIDogX3ZtLmVycm9yXG4gICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQW4gZXJyb3IgaGFzIG9jY3VycmVkLiBObyB0ZWFtIGRhdGEgaXMgYXZhaWxhYmxlLlwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZWFtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoMVwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRlYW0uQ29uc3RydWN0b3IubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgXCIg4oCUIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ueWVhcikgK1xuICAgICAgICAgICAgICAgICAgXCIgU2Vhc29uXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIk5hdGlvbmFsaXR5OlwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnRlYW0uQ29uc3RydWN0b3IubmF0aW9uYWxpdHkpKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0udGVhbS5Db25zdHJ1Y3Rvci51cmwsIHRhcmdldDogXCJfYmxhbmtcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiV2lraXBlZGlhIEJpb1wiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnllYXIpICsgXCIgV2luczogXCIgKyBfdm0uX3MoX3ZtLnRlYW0ud2lucykpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCJQb2ludHM6IFwiICsgX3ZtLl9zKF92bS50ZWFtLnBvaW50cykpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwibGlcIiwgW192bS5fdihcIldDQyBQb3NpdGlvbjogXCIgKyBfdm0uX3MoX3ZtLnRlYW0ucG9zaXRpb24pKV0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiUmVzdWx0c1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5sb2FkaW5nUmFjZXNcbiAgICAgICAgPyBfYyhcImRpdlwiLCBbX3ZtLl92KFwiTG9hZGluZyByYWNlIGRhdGEuLi5cIildKVxuICAgICAgICA6IF92bS5lcnJvclJhY2VzXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC4gTm8gcmFjZSBkYXRhIGlzIGF2YWlsYWJsZS5cIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5yYWNlcywgZnVuY3Rpb24ocmFjZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhbGwtY29sXCIsIGF0dHJzOiB7IHJvd3NwYW46IFwiMlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogXCIvcmFjZXMvXCIgKyByYWNlLnJvdW5kIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImFcIiwgW192bS5fdihfdm0uX3MocmFjZS5yYWNlTmFtZSkpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFsbC1jb2xcIiwgYXR0cnM6IHsgcm93c3BhbjogXCIyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWNlLkNpcmN1aXQuTG9jYXRpb24ubG9jYWxpdHkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFjZS5DaXJjdWl0LkxvY2F0aW9uLmNvdW50cnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWxsLWNvbFwiLCBhdHRyczogeyByb3dzcGFuOiBcIjJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHJhY2UuZGF0ZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFjdGl2ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2RyaXZlcnMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFjZS5SZXN1bHRzWzBdLkRyaXZlci5kcml2ZXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFjZS5SZXN1bHRzWzBdLkRyaXZlci5naXZlbk5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWNlLlJlc3VsdHNbMF0uRHJpdmVyLmZhbWlseU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocmFjZS5SZXN1bHRzWzBdLmdyaWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IHN1Y2Nlc3M6IHJhY2UuUmVzdWx0c1swXS5wb3NpdGlvbiA9PT0gXCIxXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhyYWNlLlJlc3VsdHNbMF0ucG9zaXRpb24pKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9kcml2ZXJzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhY2UuUmVzdWx0c1sxXS5Ecml2ZXIuZHJpdmVySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhY2UuUmVzdWx0c1sxXS5Ecml2ZXIuZ2l2ZW5OYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFjZS5SZXN1bHRzWzFdLkRyaXZlci5mYW1pbHlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHJhY2UuUmVzdWx0c1sxXS5ncmlkKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgc3VjY2VzczogcmFjZS5SZXN1bHRzWzFdLnBvc2l0aW9uID09PSBcIjFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHJhY2UuUmVzdWx0c1sxXS5wb3NpdGlvbikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJSYWNlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkxvY2F0aW9uXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkRhdGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRHJpdmVyXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlF1YWxpZmllZFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJGaW5pc2hlZFwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03MmEyNzgwZFwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03MmEyNzgwZFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9UZWFtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJhY2VzXCIgfSwgW1xuICAgIF9jKFwiaDFcIiwgW192bS5fdihcIlJhY2VzIOKAlCBcIiArIF92bS5fcyhfdm0ueWVhcikgKyBcIiBTZWFzb25cIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5sb2FkaW5nXG4gICAgICA/IF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJMb2FkaW5nLi4uXCIpXSlcbiAgICAgIDogX3ZtLmVycm9yXG4gICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQW4gZXJyb3IgaGFzIG9jY3VycmVkLiBObyByYWNlIGRhdGEgaXMgYXZhaWxhYmxlLlwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLXN0cmlwZWRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5yYWNlcywgZnVuY3Rpb24ocmFjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IFwiL3JhY2VzL1wiICsgcmFjZS5yb3VuZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJhXCIsIFtfdm0uX3YoX3ZtLl9zKHJhY2UucmFjZU5hbWUpKV0pXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHJhY2UuZGF0ZSkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhyYWNlLkNpcmN1aXQuY2lyY3VpdE5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHJhY2UuQ2lyY3VpdC5Mb2NhdGlvbi5sb2NhbGl0eSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhyYWNlLkNpcmN1aXQuTG9jYXRpb24uY291bnRyeSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBcIi9kcml2ZXJzL1wiICsgcmFjZS5SZXN1bHRzWzBdLkRyaXZlci5kcml2ZXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhyYWNlLlJlc3VsdHNbMF0uRHJpdmVyLmdpdmVuTmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhyYWNlLlJlc3VsdHNbMF0uRHJpdmVyLmZhbWlseU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi90ZWFtcy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWNlLlJlc3VsdHNbMF0uQ29uc3RydWN0b3IuY29uc3RydWN0b3JJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocmFjZS5SZXN1bHRzWzBdLkNvbnN0cnVjdG9yLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRGF0ZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDaXJjdWl0XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkxvY2F0aW9uXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIldpbm5pbmcgRHJpdmVyXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIldpbm5pbmcgVGVhbVwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03OTcwNGFjMlwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03OTcwNGFjMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9SYWNlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJhcHBcIiB9IH0sIFtcbiAgICBfYyhcIm5hdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfdm0uX20oMCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiwgYXR0cnM6IHsgaWQ6IFwibmF2YmFyXCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2IG5hdmJhci1uYXZcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG86IFwiL3RlYW1zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJleGFjdC1hY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jbGFzc1wiOiBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJhXCIsIFtfdm0uX3YoXCJUZWFtc1wiKV0pXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICB0bzogXCIvZHJpdmVyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXhhY3QtYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwiYVwiLCBbX3ZtLl92KFwiRHJpdmVyc1wiKV0pXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICB0bzogXCIvcmFjZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImV4YWN0LWFjdGl2ZS1jbGFzc1wiOiBcImFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcImFcIiwgW192bS5fdihcIlJhY2VzXCIpXSldXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXZiYXItZm9ybVwiIH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJ5ZWFyc1wiLCB7IG9uOiB7IHVwZGF0ZTogX3ZtLnVwZGF0ZVllYXIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcIm1haW5cIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIsIGF0dHJzOiB7IGlkOiBcIm1haW5cIiB9IH0sXG4gICAgICBbX2MoXCJyb3V0ZXItdmlld1wiLCB7IGF0dHJzOiB7IHllYXI6IF92bS55ZWFyIH0gfSldLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyLWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgICAgXCJkYXRhLXRhcmdldFwiOiBcIiNuYXZiYXJcIixcbiAgICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzci1vbmx5XCIgfSwgW192bS5fdihcIlRvZ2dsZSBuYXZpZ2F0aW9uXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uLWJhclwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi1iYXJcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24tYmFyXCIgfSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuYXZiYXItYnJhbmRcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIkYxIERhdGEgQXBwXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03YmE1YmQ5MFwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03YmE1YmQ5MFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTBmNmFlYTU4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ecml2ZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIzZDY5MDRmYlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMGY2YWVhNThcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0RyaXZlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMGY2YWVhNThcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0RyaXZlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMGY2YWVhNThcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvRHJpdmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTM1NGZhYTk0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UZWFtcy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjUzOWE5Mjk0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTRmYWE5NFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGVhbXMudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTM1NGZhYTk0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UZWFtcy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMzU0ZmFhOTRcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVGVhbXMudnVlXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2NjM2ZjNmFcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRHJpdmVycy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjdlOGEyOWIwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zY2MzZmM2YVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ecml2ZXJzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zY2MzZmM2YVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ecml2ZXJzLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0zY2MzZmM2YVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0RyaXZlcnMudnVlXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzJhMjc4MGRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RlYW0udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI3OGI0OWZjNFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzJhMjc4MGRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RlYW0udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTcyYTI3ODBkXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UZWFtLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03MmEyNzgwZFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9UZWFtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdiYTViZDkwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHAudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIyZmJkZjgyYVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2JhNWJkOTBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2JhNWJkOTBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2JhNWJkOTBcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGdvdCAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJ2pxdWVyeS9kaXN0L2pxdWVyeS5taW4uanMnKTtcbnJlcXVpcmUoJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcycpO1xucmVxdWlyZSgnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbi5qcycpO1xuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVlUmVzb3VyY2UgZnJvbSAndnVlLXJlc291cmNlJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcic7XG5cblZ1ZS51c2UoVnVlUmVzb3VyY2UpO1xuXG5uZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuICAgIHJvdXRlcixcbiAgICB0ZW1wbGF0ZTogJzxBcHAvPicsXG4gICAgY29tcG9uZW50czogeyBBcHAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9