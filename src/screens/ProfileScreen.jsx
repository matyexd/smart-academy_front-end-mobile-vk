import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  UiButton,
  UiModalElementsButton,
  UiModalButton,
  UiText,
  UiInput,
  UiImageAvatar,
  UiImageGalleryItem,
  UiImageGallery,
  UiIcon,
  UiListElement,
  UiDivider,
  UiBottomPopup,
} from '@ui-kit';
import Images from '@assets/images';
import {height, width} from '@utils';
import PopUpMoreDetails from '../components/PopUpMoreDetails';

const ProfileScreen = () => {
  const [showModalMoreDetails, setShowModalMoreDetails] = useState(false);

  const changeModalVisible = value => {
    setShowModalMoreDetails(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topIcon}>
        <UiIcon iconName="arrowleft" iconColor="white" />
        <UiIcon
          iconName="dotsvertical"
          iconColor="white"
          style={[
            {
              transform: [{rotate: '90deg'}],
            },
          ]}
        />
      </View>
      <View style={styles.infoProfile}>
        <View style={[styles.centerItem, {paddingBottom: height(17)}]}>
          <UiImageAvatar src={Images.ava3} size={125} />
        </View>

        <View style={[styles.centerItem, {paddingBottom: height(6)}]}>
          <UiText size={18} color="white" width={700}>
            Cat William
          </UiText>
        </View>

        <View style={[styles.centerItem, {paddingBottom: height(29)}]}>
          <UiText size={14} color="#8672BB">
            @Williams
          </UiText>
        </View>

        <View style={[styles.centerItem, {paddingBottom: height(8)}]}>
          <UiText color="#8672BB">Россия, Санкт-Петербург</UiText>
        </View>

        <View style={[styles.centerItem, {paddingBottom: height(24)}]}>
          <UiText color="white">Место работы: Artist by Passion!</UiText>
        </View>

        <View style={styles.infoProfile__additionalInfo}>
          <View style={styles.followers}>
            <UiText color="white" width={700}>
              2,467
            </UiText>
            <UiText color="#8672BB" width={700}>
              Followers
            </UiText>
          </View>
          <View style={styles.following}>
            <UiText color="white" width={700}>
              1,589
            </UiText>
            <UiText color="#8672BB" width={700}>
              Following
            </UiText>
          </View>
          <View style={styles.moreDetailsButton}>
            <UiButton onPress={() => changeModalVisible(true)}>
              Подробнее
            </UiButton>
            {/* Открываем модальное окно с подробной информацией */}
            <UiBottomPopup
              visible={showModalMoreDetails}
              onTouchOutside={setShowModalMoreDetails}>
              <PopUpMoreDetails
                setShowModalMoreDetails={setShowModalMoreDetails}
              />
            </UiBottomPopup>
          </View>
        </View>
      </View>

      <UiDivider style={{marginVertical: height(24)}} />

      <View>
        <View style={styles.centerItem}>
          <UiText color="white">Фотография</UiText>
          <View style={{marginLeft: 8}}>
            <UiText color="#8672BB">254</UiText>
          </View>
        </View>

        <UiImageGallery style={{marginTop: 10}}>
          <UiImageGalleryItem src={Images.gallery1} />
          <UiImageGalleryItem src={Images.ava3} />
          <UiImageGalleryItem src={Images.gallery3} />
          <UiImageGalleryItem src={Images.gallery4} />
          <UiImageGalleryItem src={Images.gallery5} />
          <UiImageGalleryItem src={Images.gallery1} />
          <UiImageGalleryItem src={Images.gallery2} />
        </UiImageGallery>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width(15),
    paddingTop: height(20),
  },
  centerItem: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoProfile__additionalInfo: {
    flexDirection: 'row',
    paddingHorizontal: width(5),
  },
  followers: {
    flexGrow: 1,
    flexShrink: 1,
  },
  following: {
    flexGrow: 1,
    flexShrink: 1,
  },
  moreDetailsButton: {
    flexGrow: 2.5,
    flexShrink: 2,
  },
});

export default ProfileScreen;
