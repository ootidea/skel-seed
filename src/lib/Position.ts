export type EnneaPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'center'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right'

export type HorizontalPosition = 'left' | 'center' | 'right'
export type VerticalPosition = 'top' | 'center' | 'bottom'

export function toHorizontalPosition(position: EnneaPosition): HorizontalPosition {
  const mapping = {
    'top left': 'left',
    left: 'left',
    'bottom left': 'left',
    top: 'center',
    center: 'center',
    bottom: 'center',
    'top right': 'right',
    right: 'right',
    'bottom right': 'right',
  } as const
  return mapping[position]
}

export function toVerticalPosition(position: EnneaPosition): VerticalPosition {
  const mapping = {
    'top left': 'top',
    top: 'top',
    'top right': 'top',
    left: 'center',
    center: 'center',
    right: 'center',
    'bottom left': 'bottom',
    bottom: 'bottom',
    'bottom right': 'bottom',
  } as const
  return mapping[position]
}

export function toXPercent(position: EnneaPosition): `${number}%` {
  const mapping = { left: '0%', center: '50%', right: '100%' } as const
  return mapping[toHorizontalPosition(position)]
}

export function toYPercent(position: EnneaPosition): `${number}%` {
  const mapping = { top: '0%', center: '50%', bottom: '100%' } as const
  return mapping[toVerticalPosition(position)]
}
