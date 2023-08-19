"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { motion } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import { InfoObject, ImgListObject } from "@/type";

interface TypeWorkContent {
  onPopupImgWebsite: any;
  onCloseImgWebsite: any;
  showUpSliderImg: boolean;
  imgList: ImgListObject[];
  info: InfoObject;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const workContent = ({
  onPopupImgWebsite,
  onCloseImgWebsite,
  showUpSliderImg,
  imgList,
  info,
}: TypeWorkContent) => {
  return (
    <BootstrapDialog
      onClose={onCloseImgWebsite}
      aria-labelledby="customized-dialog-title"
      open={showUpSliderImg}
      maxWidth="md"
      className="z-[999]"
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={onCloseImgWebsite}
      >
        Project
      </BootstrapDialogTitle>
      <div className="flex ">
        <section className="h-[500px] w-[560px]  bg-[#fff]">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="h-full"
          >
            {imgList.map((evt: any) => (
              <SwiperSlide key={evt.imgSource}>
                <div className="overflow-y-scroll h-full swiper-slide">
                  <Image
                    src={evt.imgSource}
                    alt="img-works"
                    width={500}
                    objectFit="contain"
                    height={200}
                    layout="responsive"
                    loading="lazy"
                  />
                  <div className="swiper-lazy-preloader"></div>
                </div>
              </SwiperSlide>
            ))}
            ...
          </Swiper>
        </section>

        {/* Detail Content */}
        <section className="flex flex-col justify-between px-[24px] gap-[16px] ">
          <div className="w-[300px]">
            <h1 className="text-[24px] font-bold ">{info.projectName}</h1>
            <p className="text-[16px] font-medium pt-[8px] ">
              {info.description}
            </p>
            <span className="flex flex-col gap-[8px] pt-[16px]">
              <p className="text-primary-mainDark">design:</p>
              <p>{info.design}</p>
            </span>
            <span className="flex flex-col gap-[8px] pt-[16px]">
              <p className="text-primary-mainDark">programming:</p>
              <p>{info.programming}</p>
            </span>
          </div>

          {/* Link */}
          <div>
            <div className="grid grid-cols-3 gap-[16px] pt-[24px] ">
              {info.github && (
                <Link href={info.github} target="_blank">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="btn text-primary-mainDark  hover:text-while"
                  >
                    Github
                  </motion.button>
                </Link>
              )}

              {info.figma && (
                <Link href={info.figma} target="_blank">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="btn text-primary-mainDark  hover:text-while"
                  >
                    Figma
                  </motion.button>
                </Link>
              )}

              {info.visit && (
                <Link href={info.visit} target="_blank">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="btn text-primary-mainDark  hover:text-while"
                  >
                    Visit
                  </motion.button>
                </Link>
              )}
            </div>

            <span className="flex items-center gap-2 pb-[16px]">
              <span className="w-full h-[1.8px] bg-[#00000026] " />
              <p className="text-[18px] text-[#00000026] font-robotoMono font-bold">
                {info.index}
              </p>
            </span>
          </div>
        </section>
      </div>
    </BootstrapDialog>
  );
};

export default workContent;
