import React from 'react'

const Avatar = ({ children, backgroundColor, px, py, color, borderRadius, fontSize, textAlign, cursor,textDecoration }) => {

  const styles = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'black',
    borderRadius,
    fontSize,
    textAlign: 'center',
    cursor: cursor || null,
    textDecoration:"none",
  }
  return (
    <div style={styles}>
      {children}
    </div>
  )
}

export default Avatar
