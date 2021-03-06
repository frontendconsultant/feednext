export interface CreateTitleFormData {
	name: string,
	imageBase64: string,
	imageFile: string,
	categoryId: string,
}

export interface Step1Props {
	stepMovementTo: (_step?: string | undefined) => void,
	setCreateTitleFormData: React.Dispatch<CreateTitleFormData>,
	setReadableCategoryValue: React.Dispatch<React.SetStateAction<ReactNode>>
}

export interface Step2Props {
	stepMovementTo: (_step?: string | undefined) => void,
	setIsRequestReady: React.Dispatch<React.SetStateAction<boolean>>,
	setFirstEntryForm: React.Dispatch<React.SetStateAction<{ text: string }>>
}

export interface Step3Props {
	titleSlugForRouting: string | null,
	feedCreatedSuccessfully: boolean | null
}
