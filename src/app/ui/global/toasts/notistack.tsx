import {
  enqueueSnackbar,
  type SnackbarKey,
  type VariantType,
  type SnackbarOrigin,
} from "notistack";

export const ErrorNotistackToast = (
  message: string | React.ReactNode,
  options: {
    variant?: VariantType;
    anchorOrigin?: SnackbarOrigin;
  } = {
    variant: "error",
    anchorOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  }
): SnackbarKey => {
  const { variant, anchorOrigin } = options;

  return enqueueSnackbar(message, {
    variant,
    anchorOrigin,
  });
};

export const SuccessNotistackToast = (
  message: string | React.ReactNode,
  options: {
    variant?: VariantType;
    anchorOrigin?: SnackbarOrigin;
  } = {
    variant: "success",
    anchorOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  }
): SnackbarKey => {
  const { variant, anchorOrigin } = options;

  return enqueueSnackbar(message, {
    variant,
    anchorOrigin,
  });
};

export const InfoNotistackToast = (
  message: string | React.ReactNode,
  options: {
    variant?: VariantType;
    anchorOrigin?: SnackbarOrigin;
  } = {
    variant: "info",
    anchorOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  }
): SnackbarKey => {
  const { variant, anchorOrigin } = options;

  return enqueueSnackbar(message, {
    variant,
    anchorOrigin,
  });
};

export const WarningNotistackToast = (
  message: string | React.ReactNode,
  options: {
    variant?: VariantType;
    anchorOrigin?: SnackbarOrigin;
  } = {
    variant: "warning",
    anchorOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  }
): SnackbarKey => {
  const { variant, anchorOrigin } = options;

  return enqueueSnackbar(message, {
    variant,
    anchorOrigin,
  });
};

export const GeneralNotistackToast = (
  message: string | React.ReactNode,
  options: {
    variant?: VariantType;
    anchorOrigin?: SnackbarOrigin;
  } = {
    variant: "default",
    anchorOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  }
): SnackbarKey => {
  const { variant, anchorOrigin } = options;

  return enqueueSnackbar(message, {
    variant,
    anchorOrigin,
  });
};
