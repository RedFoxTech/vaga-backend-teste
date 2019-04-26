"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// All properties we can use to start a query chain
// from the `knex` object, e.g. `knex.select('*').from(...`
var _default = ['with', 'withRecursive', 'select', 'as', 'columns', 'column', 'from', 'fromJS', 'into', 'withSchema', 'table', 'distinct', 'join', 'joinRaw', 'innerJoin', 'leftJoin', 'leftOuterJoin', 'rightJoin', 'rightOuterJoin', 'outerJoin', 'fullOuterJoin', 'crossJoin', 'where', 'andWhere', 'orWhere', 'whereNot', 'orWhereNot', 'whereRaw', 'whereWrapped', 'havingWrapped', 'orWhereRaw', 'whereExists', 'orWhereExists', 'whereNotExists', 'orWhereNotExists', 'whereIn', 'orWhereIn', 'whereNotIn', 'orWhereNotIn', 'whereNull', 'orWhereNull', 'whereNotNull', 'orWhereNotNull', 'whereBetween', 'whereNotBetween', 'andWhereBetween', 'andWhereNotBetween', 'orWhereBetween', 'orWhereNotBetween', 'groupBy', 'groupByRaw', 'orderBy', 'orderByRaw', 'union', 'unionAll', 'intersect', 'having', 'havingRaw', 'orHaving', 'orHavingRaw', 'offset', 'limit', 'count', 'countDistinct', 'min', 'max', 'sum', 'sumDistinct', 'avg', 'avgDistinct', 'increment', 'decrement', 'first', 'debug', 'pluck', 'clearSelect', 'clearWhere', 'clearOrder', 'insert', 'update', 'returning', 'del', 'delete', 'truncate', 'transacting', 'connection'];
exports.default = _default;
module.exports = exports.default;