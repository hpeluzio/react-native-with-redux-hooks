import styled from 'styled-components/native'
// import ic_menu from '~/images/ic_menu.png';
import { metrics, colors, constants } from '~/styles/index'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    height: ${metrics.screenHeight * 0.4}px;
    margin-top: ${metrics.screenHeight * 0.12}px;
`

export const Title = styled.Text`
    font-size: ${hp(constants.font_size_md_pc)};
    font-family: ${constants.font_family_semi_bold};
    color: #777777;
    text-align: center;
    margin-bottom: ${metrics.normalize(5)}px;
`

export const Message = styled.Text`
    font-size: ${hp(constants.font_size_pc)};
    font-family: ${constants.font_family_semi_bold};
    color: #777777;
    text-align: center;
    margin: ${metrics.normalize(20)}px ${metrics.normalize(45)}px 0;
`

export const Circle = styled.View`
    height: ${metrics.normalize(86)}px;
    width: ${metrics.normalize(86)}px;
    border-radius: ${metrics.normalize(86 / 2)}px;
    background-color: ${colors.primaryDark};
    justify-content: center;
    align-items: center;
    elevation: 5;
`

// export const Icon = styled.Image.attrs({
//   source: ic_menu,
//   resizeMode: 'contain',
// })`
//   width: ${metrics.normalize(41)}px;
//   height: ${metrics.normalize(41)}px;
//   tint-color: #fff;
// `;
