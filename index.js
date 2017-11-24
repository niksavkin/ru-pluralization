/**
 * @copyright 2017 (с) Arcsinus. All rights reserved
 * @author Nikita Savkin <savkin@arcsinus.ru>
 */

"use strict";
module.exports = {
  /**
   * Принимает число и 3 формы слова
   * @param {number} number - число объектов
   * @param {string[]} titles - массив из 3 форм слова с различными числами
   * @returns {string} - нужная форма
   *
   * @example
   * pluralize(3, ["пассажир", "пассажира", "пассажиров"]) // return 'пассажира'
   */
  pluralize(number, titles) {
    number = Math.abs(number);
    const cases = [2, 0, 1, 1, 1, 2];
    let index = 0;
    if ((number % 100) > 4 && (number % 100) < 20) {
      index = 2;
    } else {
      number = number % 10;
      let localIndex = (number < 5) ? number : 5;
      index = cases[localIndex];
    }
    return titles[index];
  }
};
