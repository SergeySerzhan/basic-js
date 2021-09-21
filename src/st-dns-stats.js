import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let domainsArr = [];
  let domainsReverse = [];
  let result = {};

  domains.forEach((domain) => {
    let domainConstruct = "";
    domain
      .split(".")
      .reverse()
      .forEach((d) => {
        domainConstruct += "." + d;
        domainsArr.push(domainConstruct);
      });
    domainsReverse.push(domainConstruct);
  });

  new Set(domainsArr).forEach((domain) => {
    result[domain] = domainsReverse.filter((el) =>
      el.startsWith(domain)
    ).length;
  });
  return result;
}
