import React, { FC, useContext, useState } from 'react';
import { authContext } from 'context/authContext';
import { useRouter } from 'next/router';
import Modal from '../components/common/Modal';

const withConsignmentTab = <Props extends Record<string, unknown>>(
  Component: React.ComponentType<Props>
) => {
  const ComponentWithPrivateTab: FC<Props> = (props) => {
    const { push } = useRouter();
    const { accessToken, setAccessToken } = useContext(authContext);
    const [openedModal, setOpenedModal] = useState(false);

    const onClick = () => {
      if (!accessToken) {
        setOpenedModal(true)

        return;
      }
      push('/consignment', '', { shallow: true });
    };
    
    return (
      <>
        <Component
          {...props}
          setToken={setAccessToken}
          onClickConsignment={onClick}
          setAccessToken={setAccessToken}
          accessToken={accessToken}
        />
        {openedModal && (
          <Modal onClose={() => setOpenedModal(false)}>
            <div className='text-center'>
              <p>Please login for consignment</p>
              <button
                onClick={() => {
                  push('/login?referer=/consignment');
                }}
                className='mt-[30px] bg-orange-700 uppercase text-white w-[105px] h-[30px] rounded-[5px]'
              >
                OK
              </button>
            </div>
          </Modal>
        )}
      </>
    );
  };

  return ComponentWithPrivateTab;
};

export default withConsignmentTab;
