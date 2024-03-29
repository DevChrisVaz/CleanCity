import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: ${props => props.isDark ? "#181818" : "#EEE"};

    
    & > .reports, & > .campaigns {
        & > p {
                font-size: 18px;
                font-weight: 600;
                color: ${props => props.isDark ? '#62A077' : '#2E8049'};
                margin: 0 20px 20px;
            }
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 400px;
        height: 430px;
        box-shadow: inset ${props => props.isDark ? '2px 0 15px 8px #111' : '2px 2px 4px 2px rgba(100,100,100,.2)'};
        border-radius: 20px;
        padding: 20px;
        overflow-y: auto;
    }

    & > .reports > .reports-list {
        width: 100%;

        & > p {
            color: ${props => props.isDark ? '#fff' : '#000'};
        }

        & > .report {
            position: relative;
            width: 100%;
            min-height: 100px;
            border-radius: 50px;
            padding: 10px 30px;
            margin-bottom: 18px;
            box-shadow: ${props => props.isDark ? '2px 0 15px 8px #111' : '2px 2px 4px 2px rgba(100,100,100,.2)'};

            & > .report-header {
                display: flex;
                justify-content: space-between;

                & > .title {
                    color: #2E8049;
                    font-size: 18px;
                    font-weight: 600;
                }

                & > .date {
                    color: #666;
                }
            }

            & > .report-content {
                & > .status {
                    color: #666;
                }
            }

            & > button {
                position: absolute;
                right: 30px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 105px;
                bottom: 7px;
                padding: 3px 10px;
                border: none;
                background: #2E8049;
                color: #fff;
                border-radius: 20px;
                cursor: pointer;
            }
        }
    }
    & > .campaigns > .campaigns-list {
        width: 100%;

        & > p {
            color: ${props => props.isDark ? '#fff' : '#000'};
        }

        & > .campaign {
            position: relative;
            width: 100%;
            min-height: 100px;
            border-radius: 50px;
            padding: 10px 30px;
            margin-bottom: 18px;
            box-shadow: ${props => props.isDark ? '2px 0 15px 8px #111' : '2px 2px 4px 2px rgba(100,100,100,.2)'};

            & > .campaign-header {
                display: flex;
                justify-content: space-between;

                & > .title {
                    color: #2E8049;
                    font-size: 18px;
                    font-weight: 600;
                }

                & > .date {
                    color: #666;
                }
            }

            & > .campaign-content {
                & > .status {
                    color: #666;
                }
            }

            & > button {
                position: absolute;
                right: 30px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 105px;
                bottom: 7px;
                padding: 3px 10px;
                border: none;
                background: #2E8049;
                color: #fff;
                border-radius: 20px;
                cursor: pointer;
            }
        }
    }
`;

export const Info = styled.div`
    padding: 30px 100px 0;
    color: ${props => props.isDark ? '#fff' : '#000'};
    margin-bottom: 50px;

    & > p {
        margin-bottom: 10px;
    }
`;

export const Banner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 400px;
    background: ${props => props.isDark ? '#174025' : "#2E8049"};
    overflow: hidden;

    &:last-child {
        margin-bottom: 50px;
    }

    & > .banner-img {
        position: relative;
        width: 610px;
        height: 100%;
        background: ${props => props.isDark ? '#282828' : '#AAA'};  
        clip-path: polygon(0 0, 78% 0, 100% 100%, 0% 100%);

        & > .img-container {
            width: 600px;
            height: 100%;
            clip-path: polygon(0 0, 78% 0, 100% 100%, 0% 100%);

            & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    & > .banner-info {
        width: calc(100% - 610px);
        height: 100%;
        padding: 20px 50px;
        color: #fff;

        & > p {
            margin: 30px 20px;
            font-size: 18px;
        }
    }
`;

export const BannerReverse = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
    height: 400px;
    background: ${props => props.isDark ? '#174025' : "#2E8049"};
    overflow: hidden;

    &:last-child {
        margin-bottom: 50px;
    }

    & > .banner-img {
        position: relative;
        width: 610px;
        height: 100%;
        background: ${props => props.isDark ? '#282828' : '#AAA'};  
        clip-path: polygon(22% 0, 100% 0, 100% 100%, 0% 100%);

        & > .img-container {
            width: 600px;
            height: 100%;
            margin-left: 10px;
            clip-path: polygon(22% 0, 100% 0, 100% 100%, 0% 100%);

            & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    & > .banner-info {
        width: calc(100% - 610px);
        height: 100%;
        padding: 20px 50px;
        color: #fff;

        & > p {
            margin: 30px 20px;
            font-size: 18px;
        }
    }
`;