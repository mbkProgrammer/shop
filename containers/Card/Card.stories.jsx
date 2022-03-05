import React from 'react';
import Card from './Card';

export default { title: 'containers/Card' };
export const CardTest = () => (<Card imageSrc="https://picsum.photos/250/150.jpg" imageAlt="test" price="10.0" title="this is tittle" path="/write-path-when-onclick" />);
