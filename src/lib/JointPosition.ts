export type JointPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'center'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right'

export function toXPercent(position: JointPosition): `${number}%` {
  switch (position) {
    case 'top left':
    case 'left':
    case 'bottom left':
      return '0%'
    case 'top':
    case 'center':
    case 'bottom':
      return '50%'
    case 'top right':
    case 'right':
    case 'bottom right':
      return '100%'
  }
}

export function toYPercent(position: JointPosition): `${number}%` {
  switch (position) {
    case 'top left':
    case 'top':
    case 'top right':
      return '0%'
    case 'left':
    case 'center':
    case 'right':
      return '50%'
    case 'bottom left':
    case 'bottom':
    case 'bottom right':
      return '100%'
  }
}
