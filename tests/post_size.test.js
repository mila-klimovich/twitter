import { assert } from 'chai';
import { describe, it } from 'mocha';
import postSize from '../public/assets/post_size.js';

describe('The function to check the post size calculation', () => {
  it('with no links', () => {
    const expectedResult = 12;
    const result = postSize('Всем привет!');
    assert.equal(expectedResult, result);
  });

  it('with one link', () => {
    const expectedResult = 45;
    const result = postSize(
      'How are you today? Share your thoughts here: <https://vk.com/good_life>',
    );
    assert.equal(expectedResult, result);
  });

  it('with two links', () => {
    const expectedResult = 37;
    const result = postSize(
      'Checkout the latest euro 2024 news: <https://dzen.ru/a/ZnSbVvir_QA0xPng> <https://dzen.ru/a/ZnAGFINlOGbMYbf5>',
    );
    assert.equal(expectedResult, result);
  });

  it('with three links', () => {
    const expectedResult = 65;
    const result = postSize(
      'Treat yourself to something special! Check out our ideas here: <https://thesetaihotels.com/en/setai-tel-aviv/spa/> <https://www.yelp.com/search?cflt=jewelry&find_loc=Milan> <https://www.tsum.ru/>',
    );
    assert.equal(expectedResult, result);
  });

  it('with four links', () => {
    const expectedResult = 72;
    const result = postSize(
      'Today is a great day for new discoveries! Explore the world with us: <https://www.marriott.com/en-us/hotels/gydsi-sheraton-baku-intourist/> <https://travel.usnews.com/rankings/worlds-best-vacations/> <https://www.tofutraveler.com/blog/best-places-to-travel-for-beginners> <https://www.makemytrip.com/tripideas/places>',
    );
    assert.equal(expectedResult, result);
  });

  it('with five links', () => {
    const expectedResult = 251;
    const result = postSize(
      '<https://koreanskincare.nl/> Discover the latest skincare trends and products to achieve that summer glow! Click the link above to see it! From hydrating serums to SPF essentials, weve curated a list to keep your skin radiant all season long: <https://www.goodhousekeeping.com/beauty/anti-aging/g60539683/best-korean-sunscreen/> <https://www.amazon.com/korean-sunscreen/s?k=korean+sunscreen> Dive into our beauty guide here: <https://sokoglam.com/pages/the-korean-skin-care-routine> <https://beautybarn.in/10-step-korean-skincare-routine/>',
    );
    assert.equal(expectedResult, result);
  });

  it('with six links', () => {
    const expectedResult = 140;
    const result = postSize(
      '<https://adoptapet.es/adopt> <https://kerubi.es/perros-en-adopcion-barcelona/> <https://ace-charity.org/en/> <https://valleverdeanimalrescue.org/> <https://protectorabcn.es/en/adopt/> Meet the adorable rescue pets looking for forever homes! Learn more about their stories and how you can adopt a new best friend today! <https://www.newstartrescuespain.com/>',
    );
    assert.equal(expectedResult, result);
  });

  it('with seven links', () => {
    const expectedResult = 220;
    const result = postSize(
      '<https://www.vogue.com/fashion/trends> Elevate your summer wardrobe with these must-have essentials! <https://www.glamour.com/story/2024-fashion-trends> From sexy dresses to chic accessories, <https://www.elle.com/fashion/trend-reports/> weve curated a collection to keep you stylish and cool during the warmer months. <https://www.harpersbazaar.com/fashion/trends/> Explore our fashion picks here: <https://wwd.com/fashion-news/fashion-trends/> <https://www.elle.com/fashion/> <https://www.refinery29.com/en-us/fashion-trends-2024>',
    );
    assert.equal(expectedResult, result);
  });

  it('with eight links', () => {
    const expectedResult = 187;
    const result = postSize(
      '<https://www.skinnytaste.com/recipes/dinner-recipes/> <https://www.bbcgoodfood.com/recipes/collection/healthy-dinner-recipes> <https://whatsgabycooking.com/category/categories/main-course/healthy-dinner/> Explore new flavors in your kitchen with our quick and delicious recipes. <https://www.eatingwell.com/recipes/17947/mealtimes/dinner/> From comforting soups to decadent desserts, <https://www.eatwell101.com/low-effort-healthy-dinners-recipes> discover dishes that will impress your taste buds and guests! <https://www.nhs.uk/healthier-families/recipes/dinner/> <https://www.loveandlemons.com/easy-dinner-ideas/> <https://www.thepioneerwoman.com/food-cooking/meals-menus/g35180879/healthy-dinner-ideas/>',
    );
    assert.equal(expectedResult, result);
  });

  it('with nine links', () => {
    const expectedResult = 188;
    const result = postSize(
      '<https://www.vogue.co.uk/beauty/article/short-easy-workouts> <https://www.nytimes.com/article/really-short-workouts.html> <https://www.today.com/health/diet-fitness/best-quick-workouts-rcna21367> <https://www.planetfitness.com/community/articles/short-workouts> <https://www.cnet.com/health/fitness/4-hiit-workouts-under-20-minutes-that-are-better-than-an-hour-at-the-gym/> <https://www.nytimes.com/2024/01/17/well/move/exercise-short-workout-time.html> <https://www.verywellfit.com/mini-workouts-that-work-your-whole-body-4145817> <https://www.self.com/story/short-workouts-benefits> Kickstart your fitness journey with our 15-minute workout routines. Whether youre at home or on the go, these exercises will help you stay active and energized throughout the day! <https://betterme-pilates-exercises.com/>',
    );
    assert.equal(expectedResult, result);
  });
});
