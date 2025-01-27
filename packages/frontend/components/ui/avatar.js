import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

function Avatar({ variant, className, imagePath }) {
  const avatarType = {
    xs: 'w-8 h-8',
    normal: 'w-11 h-11',
    lg: 'w-14 h-14',
  };

  return (
    <div
      className={cls(
        avatarType[variant],
        'flex align-center justify-center overflow-hidden rounded-full',
        className
      )}
    >
      {imagePath ? (
        <div
          className="bg-no-repeat bg-center bg-cover w-full h-full"
          style={{
            backgroundImage: `url('${imagePath}')`,
          }}
          alt="noopener norefferer"
        />
      ) : (
        <div className="w-full h-full bg-text-color" />
      )}
    </div>
  );
}

Avatar.defaultProps = {
  imagePath: '',
  variant: 'normal',
  className: '',
};

Avatar.propTypes = {
  variant: PropTypes.oneOf(['xs', 'normal', 'lg']),
  imagePath: PropTypes.string,
  className: PropTypes.string,
};

export default Avatar;
