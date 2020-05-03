import {get, set, defaultsDeep, difference, union} from 'lodash-es';

const comparators: { [f: string]: (arg1: any, arg2: any) => boolean } = {
  contain: (text: string, $term: string) => removerAcentos(text).toLowerCase().indexOf(removerAcentos($term).toLowerCase()) > -1,
  gt: (n1, n2) => n1 > n2,
  gte: (n1, n2) => n1 >= n2,
  lt: (n1, n2) => n1 < n2,
  lte: (n1, n2) => n1 <= n2,
  equal: (n1, n2) => n1 === n2,
};

export function removerAcentos(inText) {

  let outText = inText.toString();
  const mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g,
    n: /\xF1/g
  };

  // tslint:disable-next-line:forin
  for (const letra in mapaAcentosHex) {
    const expressaoRegular = mapaAcentosHex[letra];
    outText = outText.replace(expressaoRegular, letra);
  }

  return outText;
}


export function recursiveSearch(hierarchicals: Array<any>, term: string | number, fields: Array<string>,
                                comparator: 'contain' | 'gt' | 'gte' | 'lt' | 'lte' | 'equal' = 'contain'): any[] {

  const list = hierarchicals.map(item => defaultsDeep({}, item));

  return list.filter(item => {

    const found = fields.map(field => {
      const $fields = field.split('.');
      const $field = get(item, $fields.length > 1 ? $fields[0] : field);
      if (!$field) {
        return false;
      }

      if (Array.isArray($field) && $field.length > 0) {
        const subsearch = recursiveSearch($field, term, $fields.length > 1 ? [$fields.slice(1).join(".")] : fields, comparator);
        set(item, $fields.length > 1 ? $fields[0] : field, subsearch);
        return subsearch.length > 0;
      }


      if (["string", "number"].indexOf(typeof $field) > -1) {
        return comparators[comparator]($field, term);
      }
      return false;
    });

    return found.reduce((b1, b2) => b1 || b2);

  });

}


export function listUnique(list: Array<any>, includeValues: Array<any>, exceptValues: Array<any>, diff?: any): Array<any> {
  let $list = diff ? list.map(item => get(item, diff).toString()) : list;
  const available = difference($list, exceptValues.filter(e => e).map(e => e.toString()));
  $list = union(available, includeValues.map(i => i.toString()));
  return list.filter(item => (diff ? $list.indexOf(get(item, diff).toString()) : $list.indexOf(item)) > -1);
}
