import mountWithTheme from '../../utils/mountWithTheme';
import CartCard from './CartCard';

test('CartCard sample', () => {
  const component = mountWithTheme(
    <CartCard
      quantity="10"
      data={{
        description: 'Peace Lil ',
        id: '99502160-8c96-4c13-bf64-c33a121136d5',
        img: 'assets/img/Product/Care-of-Peace-Lily-Plant.jpg',
        name: 'Lily',
        price: '8.0',
      }}
    />,
  );
  const tree = component.toJSON;
  expect(tree).toMatchSnapshot();
});
