import React from 'react';
import Button from './Button';

export default { title: 'components/Button' };
export const TextSmall = () => (<Button varaint="text" size="small">Button</Button>);
export const TextMedium = () => (<Button varaint="text">Button</Button>);
export const TextBig = () => (<Button varaint="text" size="big">Button</Button>);
export const OutlinedSmall = () => (<Button varaint="outlined" size="small">Button</Button>);
export const OutlinedMedium = () => (<Button varaint="outlined">Button</Button>);
export const OutlinedBig = () => (<Button varaint="outlined" size="big">Button</Button>);
export const ContainedSmall = () => (<Button varaint="contained" size="small">Button</Button>);
export const ContainedMedium = () => (<Button varaint="contained">Button</Button>);
export const ContainedBig = () => (<Button varaint="contained" size="big">Button</Button>);
