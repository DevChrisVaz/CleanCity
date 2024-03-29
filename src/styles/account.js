import styled from 'styled-components';

export const AccountContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 25px;

    & > .user {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > .user-image {
            position: relative;
            width: 200px;
            height: 200px;
            border-radius: 50%;

            &::before {
                position: absolute;
                z-index: -1;
                top: -6px;
                left: -6px;
                content: '';
                width: 212px;
                height: 212px;
                border-radius: 50%;
                background: ${props => props.isDark ? '#383838' : '#CCC'};
            }

            & > .img-container {
                display: flex;
                align-items: center;
                justify-content: center;
                background: ${props => props.isDark ? '#181818' : '#EEE'};
                width: 100%;
                height: 100%;
                border-radius: 100%;
                overflow: hidden;

                & > img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

        & > .header {
            margin-top: 10px;
            & > p {
                font-size: 22px;
                font-weight: bold;
                color: ${props => props.isDark ? '#fff' : '#444'};
            }
        }

        & > .content {
            width: 500px;
            margin-top: 20px;
            padding: 20px 0;
            border-radius: 25px;
            box-shadow: ${props => props.isDark ? '2px 2px 5px 5px rgba(0, 0, 0, .1)' : '2px 2px 5px 5px rgba(0, 0, 0, .05)'};
            background: ${props => props.isDark ? '#222' : '#fff'};

            & > .content-line {
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding: 10px 20px;
                border-bottom: ${props => props.isDark ? '3px solid #181818' : '3px solid #EEE'};
                color: ${props => props.isDark ? '#999' : '#666'};

                &:last-child {
                    border: none;
                }
            }
        }
    }
`;