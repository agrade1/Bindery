import type { IconProps } from '@phosphor-icons/react';
import type { ComponentType } from 'react';

export type MenuItem = { id: number; to: string; label: string; Icon: ComponentType<IconProps> };
