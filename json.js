window.json = {
		"themeConfig": {
			"styling": {
				"colors": {
					"primaryColor": "#28B3E3",
					"secondaryColor": "#FBBA19",
					"whiteColor": "#FFFFFF",
					"blackColor": "#222222",
					"lightGreyColor": "#D6D6D6",
					"darkGreyColor": "#999999",
					"appBackgroundColor": "#f7f7f7",
					"webBackgroundColor": "#323640",
					"errorColor": "#FF4A4A",
					"successColor": "#1BB934",
					"offerColor": "#A58A21",
					"gradient": {
						"gradientType": "LINEAR",
						"gradientColors": ["#FF4A4A", "#FF4A87"],
						"angle": "NULL"
					}
				},
				"text": {
					"language": "en",
					"primaryTypeface": "Arial",
					"secondaryTypeface": "NULL",
					"globalLetterSpacing": 0.2,
					"textStyles": {
						"small": {
							"typeface": "themeConfig.styling.text.primaryTypeface",
							"size": 12,
							"weight": "Regular",
							"color": "themeConfig.styling.colors.darkGreyColor"
						},
						"medium": {
							"typeface": "themeConfig.styling.text.primaryTypeface",
							"size": 14,
							"weight": "Semibold",
							"color": "themeConfig.styling.colors.blackColor"
						},
						"large": {
							"typeface": "themeConfig.styling.text.primaryTypeface",
							"size": 16,
							"weight": "Bold",
							"color": "themeConfig.styling.colors.blackColor"
						}
					}
				},
				"darkMode": "FALSE",
				"cornerRadius": 4,
				"shadow": "NULL"
			},
			"layouts": {
				"spacings": {
					"defaultGridSpacing": 4,
					"screenContentPadding": "16 16 16 16",
					"spaceBetweenSections": 32,
					"spaceBetweenListItems": 0
				},
				"defaultScreenTransition": "ease-in-out(2,1.2,8,0)",
				"startFromStatusbar": "TRUE",
				"webOrderSummaryOnTop": "TRUE"
			}
		},
		"resources": {
			"iconSet": {
				"paymentCategoryIcons": {
					"card": {
						"size": 24,
						"source": "/icons/card.png"
					},
					"netbanking": {
						"size": 24,
						"source": "/icons/netbanking.png"
					},
					"upi": {
						"size": 24,
						"source": "/icons/upi.png"
					},
					"wallet": {
						"size": 24,
						"source": "/icons/wallet.png"
					},
					"payLater": {
						"size": 24,
						"source": "/icons/payLater.png"
					},
					"mealCard": {
						"size": 24,
						"source": "/icons/mealCard.png"
					}
				},
				"systemIcons": {
					"backArrow": {
						"type1": {
							"size": 16,
							"source": "/icons/backArrowWithStem.png"
						},
						"type2": {
							"size": 16,
							"source": "/icons/chevronLeft.png"
						}
					},
					"close": {
						"size": 16,
						"source": "/icons/close.png"
					},
					"radioOn": {
						"size": 16,
						"source": "/icons/radioOn.png"
					},
					"radioOff": {
						"size": 16,
						"source": "/icons/radioOff.png"
					},
					"checkboxOn": {
						"size": 16,
						"source": "/icons/checkboxOn.png"
					},
					"checkboxOff": {
						"size": 16,
						"source": "/icons/checkboxOff.png"
					},
					"expandIcon": {
						"size": 16,
						"source": "/icons/chevronRight.png"
					},
					"infoIcon": {
						"size": 12,
						"source": "/icons/infoIcon.png"
					},
					"verificationTick": {
						"size": 16,
						"source": "/icons/verificationTick.png"
					},
					"searchIcon": {
						"size": 16,
						"source": "/icons/searchIcon.png"
					},
					"addIcon": {
						"size": 32,
						"source": "/icons/addIcon.png"
					},
					"offerIcon": {
						"size": 12,
						"source": "/icons/offerIcon.png"
					},
					"outageIcon": {
						"size": 12,
						"source": "/icons/outageIcon.png"
					}
				}
			}
		},
		"components": {
			"messaging": {
				"offerMessage": {
					"text": {
						"typeface": "themeConfig.styling.text.textStyles.small.typeface",
						"size": "themeConfig.styling.text.textStyles.small.size",
						"weight": "themeConfig.styling.text.textStyles.small.weight",
						"color": "themeConfig.styling.colors.offerColor"
					},
					"background": {
						"backgroundColor": "#FFFAE0",
						"cornerRadius": "themeConfig.styling.cornerRadius",
						"strokeColor": "NULL"
					}
				},
				"autopayMessage": {
					"preChecked": "TRUE",
					"clickable": "FALSE",
					"introText": {
						"typeface": "themeConfig.styling.text.textStyles.small.typeface",
						"size": "themeConfig.styling.text.textStyles.small.size",
						"weight": "themeConfig.styling.text.textStyles.small.weight",
						"color": "themeConfig.styling.colors.primaryColor"
					},
					"messageText": {
						"typeface": "themeConfig.styling.text.textStyles.small.typeface",
						"size": "themeConfig.styling.text.textStyles.small.size",
						"weight": "themeConfig.styling.text.textStyles.small.weight",
						"color": "themeConfig.styling.text.textStyles.small.color"
					},
					"background": {
						"backgroundColor": "themeConfig.styling.colors.appBackgroundColor",
						"cornerRadius": "themeConfig.styling.cornerRadius",
						"strokeColor": "NULL"
					}
				},
				"visaOneClickMessage": {
					"preChecked": "TRUE",
					"messageText": {
						"typeface": "themeConfig.styling.text.textStyles.small.typeface",
						"size": "themeConfig.styling.text.textStyles.small.size",
						"weight": "themeConfig.styling.text.textStyles.small.weight",
						"color": "themeConfig.styling.text.textStyles.small.color"
					},
					"background": {
						"backgroundColor": "themeConfig.styling.colors.appBackgroundColor",
						"cornerRadius": "themeConfig.styling.cornerRadius",
						"strokeColor": "NULL"
					}
				},
				"outageMessage": {
					"messageText": {
						"typeface": "themeConfig.styling.text.textStyles.small.typeface",
						"size": "themeConfig.styling.text.textStyles.small.size",
						"weight": "themeConfig.styling.text.textStyles.small.weight",
						"color": "themeConfig.styling.colors.errorColor"
					},
					"background": {
						"backgroundColor": "themeConfig.styling.colors.appBackgroundColor",
						"cornerRadius": "NULL",
						"strokeColor": "NULL"
					}
				},
				"saveCardMessage": {
					"preChecked": "TRUE",
					"clickable": "FALSE",
					"messageText": {
						"typeface": "themeConfig.styling.text.textStyles.small.typeface",
						"size": "themeConfig.styling.text.textStyles.small.size",
						"weight": "themeConfig.styling.text.textStyles.small.weight",
						"color": "themeConfig.styling.text.textStyles.small.color"
					},
					"background": {
						"backgroundColor": "themeConfig.styling.colors.whiteColor",
						"cornerRadius": "themeConfig.styling.cornerRadius",
						"strokeColor": "NULL"
					}
				},
				"waitingMessage": {
					"messageText": {
						"typeface": "themeConfig.styling.text.textStyles.small.typeface",
						"size": "themeConfig.styling.text.textStyles.small.size",
						"weight": "themeConfig.styling.text.textStyles.small.weight",
						"color": "themeConfig.styling.text.textStyles.small.color"
					},
					"background": {
						"backgroundColor": "themeConfig.styling.colors.whiteColor",
						"cornerRadius": "themeConfig.styling.cornerRadius",
						"strokeColor": "NULL"
					}
				}
			},
			"buttons": {
				"primaryButton": {
					"props": {
						"visibility": "TRUE",
						"height": 48,
						"width": "MATCH_PARENT",
						"margin": 0,
						"buttonAlignment": "center",
						"text": {
							"typeface": "themeConfig.styling.text.primaryTypeface",
							"size": 16,
							"weight": "Bold",
							"color": "themeConfig.styling.colors.whiteColor",
							"opacity": 0.33,
							"content": "Proceed to Pay"
						},
						"background": {
							"backgroundColor": "themeConfig.styling.colors.primaryColor",
							"backgroundOpacity": 0.33,
							"cornerRadius": "themeConfig.styling.cornerRadius",
							"strokeColor": "NULL",
							"strokeOpacity": 0.33,
							"shadow": "themeConfig.styling.shadow"
						}

					},
					"states": {
						"enabled": {
							"text": {
								"opacity": 1.0
							},
							"background": {
								"backgroundColor": "themeConfig.styling.colors.primaryColor",
								"backgroundOpacity": 1.0,
								"strokeColor": "NULL",
								"strokeOpacity": 1.0,
								"shadow": "themeConfig.styling.shadow"
							}
						}
					}
				},
				"secondaryButton": {
					"props": {
						"visibility": "TRUE",
						"height": 48,
						"width": "MATCH_PARENT",
						"margin": 0,
						"buttonAlignment": "center",
						"text": {
							"typeface": "themeConfig.styling.text.primaryTypeface",
							"size": 16,
							"weight": "Bold",
							"color": "themeConfig.styling.colors.whiteColor",
							"opacity": 0.33
						},
						"background": {
							"backgroundColor": "themeConfig.styling.colors.whiteColor",
							"backgroundOpacity": 0.33,
							"cornerRadius": "themeConfig.styling.cornerRadius",
							"strokeColor": "themeConfig.styling.colors.primaryColor",
							"strokeOpacity": 0.33,
							"shadow": "themeConfig.styling.shadow"
						}

					},
					"states": {
						"enabled": {
							"text": {
								"opacity": 1.0
							},
							"background": {
								"backgroundColor": "themeConfig.styling.colors.primaryColor",
								"backgroundOpacity": 1.0,
								"strokeColor": "themeConfig.styling.colors.primaryColor",
								"strokeOpacity": 1.0,
								"shadow": "themeConfig.styling.shadow"
							}
						}
					}
				},
				"tertiaryButton": {
					"props": {
						"visibility": "TRUE",
						"height": 32,
						"width": "MATCH_PARENT",
						"margin": 0,
						"buttonAlignment": "center",
						"text": {
							"typeface": "themeConfig.styling.text.primaryTypeface",
							"size": 12,
							"weight": "Semibold",
							"color": "themeConfig.styling.colors.primaryColor",
							"opacity": 0.33
						},
						"background": {
							"backgroundColor": "NULL",
							"backgroundOpacity": "NULL",
							"cornerRadius": "NULL",
							"strokeColor": "NULL",
							"strokeOpacity": 1.0,
							"shadow": "NULL"
						}
					},
					"states": {
						"enabled": {
							"text": {
								"opacity": 1.0
							},
							"background": {
								"backgroundColor": "NULL",
								"backgroundOpacity": "NULL",
								"strokeColor": "NULL",
								"strokeOpacity": 1.0,
								"shadow": "NULL"
							}
						}
					}
				}
			},
			"containers": {
				"appbar": {
					"height": 54,
					"mwebAppbarHidden": "TRUE",
					"backIcon": {
						"component": "resources.iconSet.systemIcons.backArrow",
						"visibility": "TRUE"
					},
					"closeIcon": {
						"component": "resources.iconSet.systemIcons.close",
						"visibility": "TRUE"
					},
					"text": {
						"typeface": "themeConfig.styling.text.primaryTypeface",
						"size": 24,
						"weight": "Bold",
						"color": "themeConfig.styling.colors.whiteColor",
						"alignment": "LEFT"
					},
					"background": {
						"backgroundColor": "themeConfig.styling.colors.primaryColor",
						"ImageFillURL": "NULL",
						"shadow": "themeConfig.styling.shadow"
					},
					"content": "Payment Methods"
				},
				"expandableListItem": {
					"padding": "16 16 16 16",
					"spaceBetweenListItems": "themeConfig.layout.spacings.spaceBetweenListItems",
					"defaultHeight": 56,
					"icons": {
						"logo": {
							"size": 32,
							"alignment": "LEFT",
							"marginRight": 24,
							"background": {
								"visibility": "FALSE",
								"backgroundColor": "themeConfig.styling.colors.whiteColor",
								"cornerRadius": "themeConfig.styling.cornerRadius",
								"strokeColor": "NULL"
							}
						},
						"networkIcon": {
							"visibility": "TRUE",
							"appendToPrimary": "TRUE",
							"positionWRTText": "AFTER"
						},
						"checkbox": {
							"visibility": "TRUE",
							"alignment": "RIGHT"
						}
					},
					"background": {
						"backgroundColor": "themeConfig.styling.colors.whiteColor",
						"cornerRadius": "themeConfig.styling.cornerRadius",
						"shadow": "themeConfig.styling.shadow"
					},
					"primaryText": {
						"typeface": "themeConfig.styling.text.textStyles.medium.typeface",
						"size": "themeConfig.styling.text.textStyles.medium.size",
						"weight": "themeConfig.styling.text.textStyles.medium.weight",
						"color": "themeConfig.styling.text.textStyles.medium.color"
					},
					"secondaryText": {
						"visibility": "TRUE",
						"appendToPrimary": "FALSE",
						"typeface": "themeConfig.styling.text.textStyles.small.typeface",
						"size": "themeConfig.styling.text.textStyles.small.size",
						"weight": "themeConfig.styling.text.textStyles.small.weight",
						"color": "themeConfig.styling.text.textStyles.small.color",
						"letterSpacing": "themeConfig.styling.text.globalLetteSpacing"
					},
					"secondaryText2": {
						"visibility": "TRUE",
						"appendToPrimary": "FALSE",
						"typeface": "themeConfig.styling.text.textStyles.small.typeface",
						"size": "themeConfig.styling.text.textStyles.small.size",
						"weight": "themeConfig.styling.text.textStyles.small.weight",
						"color": "themeConfig.styling.colors.primaryColor",
						"letterSpacing": "themeConfig.styling.text.globalLetteSpacing"
					},
					"tertiaryButton": {
						"component": "components.buttons.tertiaryButton"
					},
					"primarybutton": {
						"inListItem": "TRUE",
						"component": "components.buttons.primaryButton",
						"props": {
							"visibility": "FALSE",
							"height": 32,
							"text": {
								"size": 14,
								"weight": "Bold",
								"content": "Proceed to Pay"
							}
						}
					},
					"offerMessage": {
						"component": "components.messaging.offerMessage",
						"visibility": "FALSE"
					},
					"autopayMessage": {
						"component": "components.messaging.autopayMessage",
						"visibility": "FALSE"
					},
					"outageMessage": {
						"component": "components.messaging.outageMessage",
						"visibility": "FALSE"
					},
					"visaOneClickMessage": {
						"component": "components.messaging.visaOneClickMessage",
						"visibility": "FALSE"
					}
				},
				"nonExpandableListItem": {
					"padding": "16 16 16 16",
					"spaceBetweenListItems": "themeConfig.layout.spacings.spaceBetweenListItems",
					"defaultHeight": 48,
					"icons": {
						"logo": {
							"size": 32,
							"alignment": "LEFT",
							"marginRight": 24,
							"background": {
								"visibility": "FALSE",
								"backgroundColor": "themeConfig.styling.colors.whiteColor",
								"cornerRadius": "themeConfig.styling.cornerRadius",
								"strokeColor": "NULL"
							}
						},
						"expandIcon": {
							"component": "themeConfig.styling.iconSet.systemIcons.expandIcon"
						}
					},
					"background": {
						"backgroundColor": "themeConfig.styling.colors.whiteColor",
						"cornerRadius": "themeConfig.styling.cornerRadius",
						"shadow": "themeConfig.styling.shadow"
					},
					"primaryText": {
						"typeface": "themeConfig.styling.text.textStyles.medium.typeface",
						"size": "themeConfig.styling.text.textStyles.medium.size",
						"weight": "themeConfig.styling.text.textStyles.medium.weight",
						"color": "themeConfig.styling.text.textStyles.medium.color"
					},
					"tertiaryButton": {
						"component": "components.buttons.tertiaryButton"
					},
					"offerMessage": {
						"component": "components.messaging.offerMessage",
						"visibility": "FALSE"
					},
					"autopayMessage": {
						"component": "components.messaging.autopayMessage",
						"visibility": "FALSE"
					},
					"outageMessage": {
						"component": "components.messaging.outageMessage",
						"visibility": "FALSE"
					},
					"visaOneClickMessage": {
						"component": "components.messaging.visaOneClickMessage",
						"visibility": "FALSE"
					}
				},
				"list": {
					"fullWidthListItem": "FALSE",
					"headerText": {
						"visibility": "TRUE",
						"typeface": "themeConfig.styling.text.textStyles.large.typeface",
						"size": "themeConfig.styling.text.textStyles.large.size",
						"weight": "themeConfig.styling.text.textStyles.large.weight",
						"color": "themeConfig.styling.text.textStyles.large.color",
						"content": "NULL"
					},
					"separator": {
						"component": "components.miscellaneous.separator",
						"showLastSeparator": "FALSE",
						"visibility": "TRUE"
					},
					"background": {
						"backgroundColor": "themeConfig.styling.colors.whiteColor",
						"cornerRadius": "themeConfig.styling.cornerRadius",
						"shadow": "themeConfig.styling.shadow"
					},
					"listItem": {
						"expandableListItem": {
							"component": "components.containers.expandableListItem"
						},
						"nonExpandableListItem": {
							"component": "components.containers.nonExpandableListItem"
						}
					}
				},
				"gridItem": {
					"hasSelectedState": "FALSE",
					"props": {
						"marginRight": 32,
						"width": 54,
						"icons": {
							"checkbox": {
								"visibility": "FALSE"
							},
							"logo": {
								"background": {
									"visibility": "FALSE",
									"backgroundColor": "themeConfig.styling.colors.whiteColor",
									"cornerRadius": "themeConfig.styling.cornerRadius",
									"strokeColor": "NULL"
								},
								"size": 48
							}
						},
						"text": {
							"size": "themeConfig.styling.texts.textStyles.medium"
						},
						"primaryButton": {
							"component": "components.buttons.primaryButton",
							"props": {
								"visibility": "FALSE",
								"height": 32,
								"width": "MATCH_PARENT",
								"text": {
									"size": 14,
									"weight": "Bold",
									"content": "Proceed to Pay"
								}
							}
						}
					},
					"states": {
						"selected": {
							"icons": {
								"checkbox": {
									"visibility": "FALSE"
								},
								"logo": {
									"background": {
										"visibility": "TRUE",
										"backgroundColor": "themeConfig.styling.colors.whiteColor",
										"strokeColor": "NULL"
									}
								}
							}
						}
					}
				},
				"grid": {
					"fullWidthGridItem": "FALSE",
					"scrollFade": 50,
					"headerText": {
						"visibility": "TRUE",
						"typeface": "themeConfig.styling.text.textStyles.large.typeface",
						"size": "themeConfig.styling.text.textStyles.large.size",
						"weight": "themeConfig.styling.text.textStyles.large.weight",
						"color": "themeConfig.styling.text.textStyles.large.color",
						"content": "NULL"
					},
					"primaryButton": {
						"visibility": "FALSE",
						"buttonAlignment": "RIGHT",
						"width": 150,
						"component": "components.buttons.primaryButton"
					},
					"moreOptions": {
						"tertiaryButton": {
							"visibility": "TRUE",
							"buttonAlignment": "LEFT",
							"component": "components.buttons.tertiayButton"
						},
						"separator": {
							"visibility": "TRUE",
							"component": "components.miscellaneous.separator"
						},
						"chevron": {
							"visibility": "TRUE",
							"component": "resources.iconSet,systemIcons.expandIcon"
						},
						"background": {
							"backgroundColor": "themeConfig.styling.colors.whiteColor",
							"cornerRadius": "themeConfig.styling.cornerRadius",
							"shadow": "themeConfig.styling.shadow"
						}
					},
					"background": {
						"backgroundColor": "themeConfig.styling.colors.whiteColor",
						"cornerRadius": "themeConfig.styling.cornerRadius",
						"shadow": "themeConfig.styling.shadow"
					},
					"gridItem": {
						"component": "components.containers.gridItem"
					}
				},
				"orderSummary": {
					"padding": "16 16 16 16",
					"defaultHeight": 56,
					"labelText1": {
						"visibility": "TRUE",
						"typeface": "themeConfig.styling.text.textStyles.small.typeface",
						"size": "themeConfig.styling.text.textStyles.small.size",
						"weight": "themeConfig.styling.text.textStyles.small.weight",
						"color": "themeConfig.styling.text.textStyles.small.color",
						"content": "Number of items"
					},
					"orderText1": {
						"visibility": "TRUE",
						"typeface": "themeConfig.styling.text.textStyles.large.typeface",
						"size": "themeConfig.styling.text.textStyles.large.size",
						"weight": "themeConfig.styling.text.textStyles.large.weight",
						"color": "themeConfig.styling.text.textStyles.large.color"
					},
					"labelText2": {
						"visibility": "TRUE",
						"typeface": "themeConfig.styling.text.textStyles.small.typeface",
						"size": "themeConfig.styling.text.textStyles.small.size",
						"weight": "themeConfig.styling.text.textStyles.small.weight",
						"color": "themeConfig.styling.text.textStyles.small.color",
						"content": "To pay"
					},
					"orderText2": {
						"visibility": "TRUE",
						"typeface": "themeConfig.styling.text.textStyles.large.typeface",
						"size": "themeConfig.styling.text.textStyles.large.size",
						"weight": "themeConfig.styling.text.textStyles.large.weight",
						"color": "themeConfig.styling.text.textStyles.large.color"
					},
					"separator": {
						"component": "components.miscellaneous.separator",
						"visibility": "TRUE"
					},
					"background": {
						"backgroundColor": "themeConfig.styling.colors.whiteColor",
						"shadow": "themeConfig.styling.shadow"
					}
				},
				"addCardForm": {
					"fullWidthCardItem": "FALSE",
					"padding": "16 16 16 16",
					"screenbackgroundColor": "themeConfig.styling.colors.appBackgroundColor",
					"headerText": {
						"visibility": "TRUE",
						"content": "NULL"
					},
					"background": {
						"backgroundColor": "themeConfig.styling.colors.whiteColor",
						"cornerRadius": "themeConfig.styling.cornerRadius",
						"shadow": "themeConfig.styling.shadow"
					},
					"saveCardMessage": {
						"component": "components.messaging.saveCardMessage",
						"visibility": "FALSE"
					},
					"offerMessage": {
						"component": "components.messaging.offerMessage",
						"visibility": "FALSE"
					},
					"autopayMessage": {
						"visibility": "FALSE"
					},
					"outageMessage": {
						"component": "components.messaging.outageMessage",
						"visibility": "FALSE"
					},
					"visaOneClickMessage": {
						"component": "components.messaging.visaOneClickMessage",
						"visibility": "FALSE"
					}
				},
				"linkWalletForm": {
					"fullWidthCardItem": "FALSE",
					"padding": "16 16 16 16",
					"screenbackgroundColor": "themeConfig.styling.colors.appBackgroundColor",
					"headerText": {
						"visibility": "TRUE",
						"content": "Link $brand Wallet"
					},
					"logo": {
						"visibility": "TRUE"
					},
					"background": {
						"backgroundColor": "themeConfig.styling.colors.whiteColor",
						"cornerRadius": "themeConfig.styling.cornerRadius",
						"shadow": "themeConfig.styling.shadow"
					},
					"offerMessage": {
						"component": "components.messaging.offerMessage",
						"visibility": "FALSE"
					},
					"outageMessage": {
						"component": "components.messaging.outageMessage",
						"visibility": "FALSE"
					}
				},
				"addUpiIdForm": {
					"fullWidthCardItem": "FALSE",
					"padding": "16 16 16 16",
					"screenbackgroundColor": "themeConfig.styling.colors.appBackgroundColor",
					"headerText": {
						"visibility": "TRUE",
						"content": "NULL"
					},
					"background": {
						"backgroundColor": "themeConfig.styling.colors.whiteColor",
						"cornerRadius": "themeConfig.styling.cornerRadius",
						"shadow": "themeConfig.styling.shadow"
					},
					"outageMessage": {
						"component": "components.messaging.outageMessage",
						"visibility": "FALSE"
					},
					"offerMessage": {
						"component": "components.messaging.offerMessage",
						"visibility": "FALSE"
					}
				},
				"webNavBar": {
					"padding": "16 16 16 16",
					"width": 200,
					"separator": {
						"component": "components.miscellaneous.separator",
						"showLastSeparator": "FALSE",
						"visibility": "TRUE"
					},
					"background": {
						"backgroundColor": "themeConfig.styling.colors.whiteColor",
						"cornerRadius": "themeConfig.styling.cornerRadius",
						"shadow": "themeConfig.styling.shadow"
					},
					"component": "components.containers.webNavBarListItem"
				},
				"webNavBarListItem": {
					"props": {
						"padding": "16 16 16 16",
						"spaceBetweenListItems": "themeConfig.layout.spacings.spaceBetweenListItems",
						"defaultHeight": 56,
						"icons": {
							"marginRight": 24,
							"card": {
								"resource": "resources.iconSet.paymentCategoryIcons.card",
								"fillColor": "themeConfig.styling.colors.lightGreyColor",
								"strokeColor": "themeConfig.styling.colors.darkGreyColor"
							},
							"wallet": {
								"resource": "resources.iconSet.paymentCategoryIcons.wallet",
								"fillColor": "themeConfig.styling.colors.lightGreyColor",
								"strokeColor": "themeConfig.styling.colors.darkGreyColor"
							},
							"netbanking": {
								"resource": "resources.iconSet.paymentCategoryIcons.netbanking",
								"fillColor": "themeConfig.styling.colors.lightGreyColor",
								"strokeColor": "themeConfig.styling.colors.darkGreyColor"
							},
							"upi": {
								"resource": "resources.iconSet.paymentCategoryIcons.upi",
								"fillColor": "themeConfig.styling.colors.lightGreyColor",
								"strokeColor": "themeConfig.styling.colors.darkGreyColor"
							},
							"payLater": {
								"resource": "resources.iconSet.paymentCategoryIcons.payLater",
								"fillColor": "themeConfig.styling.colors.lightGreyColor",
								"strokeColor": "themeConfig.styling.colors.darkGreyColor"
							},
							"mealCard": {
								"resource": "resources.iconSet.paymentCategoryIcons.mealCard",
								"fillColor": "themeConfig.styling.colors.lightGreyColor",
								"strokeColor": "themeConfig.styling.colors.darkGreyColor"
							}
						},
						"background": {
							"backgroundColor": "themeConfig.styling.colors.whiteColor",
							"cornerRadius": "themeConfig.styling.cornerRadius",
							"shadow": "NULL"
						},
						"primaryText": {
							"content": "NULL",
							"typeface": "themeConfig.styling.text.textStyles.large.typeface",
							"size": "themeConfig.styling.text.textStyles.large.size",
							"weight": "themeConfig.styling.text.textStyles.medium.weight",
							"color": "themeConfig.styling.text.textStyles.large.color"
						},
						"highlightSelectBar": {
							"color": "themeConfig.styling.colors.primaryColor",
							"visibility": "FALSE"
						}
					},
					"states": {
						"selected": {
							"icons": {
								"card": {
									"resource": "resources.iconSet.paymentCategoryIcons.card",
									"fillColor": "themeConfig.styling.colors.lightGreyColor",
									"strokeColor": "themeConfig.styling.colors.primaryColor"
								},
								"wallet": {
									"resource": "resources.iconSet.paymentCategoryIcons.wallet",
									"fillColor": "themeConfig.styling.colors.lightGreyColor",
									"strokeColor": "themeConfig.styling.colors.primaryColor"
								},
								"netbanking": {
									"resource": "resources.iconSet.paymentCategoryIcons.netbanking",
									"fillColor": "themeConfig.styling.colors.lightGreyColor",
									"strokeColor": "themeConfig.styling.colors.primaryColor"
								},
								"upi": {
									"resource": "resources.iconSet.paymentCategoryIcons.upi",
									"fillColor": "themeConfig.styling.colors.lightGreyColor",
									"strokeColor": "themeConfig.styling.colors.primaryColor"
								},
								"payLater": {
									"resource": "resources.iconSet.paymentCategoryIcons.payLater",
									"fillColor": "themeConfig.styling.colors.lightGreyColor",
									"strokeColor": "themeConfig.styling.colors.primaryColor"
								},
								"mealCard": {
									"resource": "resources.iconSet.paymentCategoryIcons.mealCard",
									"fillColor": "themeConfig.styling.colors.lightGreyColor",
									"strokeColor": "themeConfig.styling.colors.primaryColor"
								}
							},
							"background": {
								"backgroundColor": "themeConfig.styling.colors.primaryColor",
								"shadow": "themeConfig.styling.shadow"
							},
							"primaryText": {
								"weight": "themeConfig.styling.text.textStyles.large.weight",
								"color": "themeConfig.styling.colors.primaryColor"
							},
							"highlightSelectBar": {
								"visibility": "FALSE"
							}
						}
					}
				},
				"webGuestLoginCard": {}
			},
			"inputs": {
				"editText": {
					"props": {
						"boxFormat": "TRUE",
						"labelText": {
							"typeface": "themeConfig.styling.text.textStyles.medium.typeface",
							"size": "themeConfig.styling.text.textStyles.medium.size",
							"weight": "themeConfig.styling.text.textStyles.medium.weight",
							"color": "themeConfig.styling.text.textStyles.medium.color"
						},
						"placeholderText": {
							"typeface": "themeConfig.styling.text.textStyles.large.typeface",
							"size": "themeConfig.styling.text.textStyles.large.size",
							"weight": "themeConfig.styling.text.textStyles.large.weight",
							"color": "themeConfig.styling.text.textStyles.large.color"
						},
						"helperText": {
							"typeface": "themeConfig.styling.text.textStyles.small.typeface",
							"size": "themeConfig.styling.text.textStyles.small.size",
							"weight": "themeConfig.styling.text.textStyles.small.weight",
							"color": "themeConfig.styling.text.textStyles.small.color"
						},
						"background": {
							"backgroundColor": "themeConfig.styling.colors.whiteColor",
							"cornerRadius": "themeConfig.styling.cornerRadius",
							"strokeColor": "themeConfig.styling.colors.lightGreyColor"
						}
					},
					"states": {
						"clicked": {
							"background": {
								"strokeColor": "themeConfig.styling.colors.primaryColor"
							}
						},
						"error": {
							"background": {
								"strokeColor": "themeConfig.styling.colors.errorColor"
							},
							"helperText": {
								"color": "themeConfig.styling.colors.errorColor"
							}
						}
					}
				},
				"search": {
					"props": {
						"boxFormat": "TRUE",
						"placeholderText": {
							"typeface": "themeConfig.styling.text.textStyles.large.typeface",
							"size": "themeConfig.styling.text.textStyles.large.size",
							"weight": "themeConfig.styling.text.textStyles.large.weight",
							"color": "themeConfig.styling.text.textStyles.large.color"
						},
						"background": {
							"backgroundColor": "themeConfig.styling.colors.whiteColor",
							"cornerRadius": "themeConfig.styling.cornerRadius",
							"strokeColor": "themeConfig.styling.colors.lightGreyColor"
						}
					},
					"states": {
						"clicked": {
							"background": {
								"strokeColor": "themeConfig.styling.colors.darkGreyColor"
							}
						}
					}
				},
				"checkbox": {
					"props": {
						"component": "components.iconSet.systemIcons.checkboxOn"
					},
					"states": {
						"unchecked": {
							"component": "components.iconSet.systemIcons.checkboxOff"
						}
					}
				},
				"radio": {
					"props": {
						"component": "components.iconSet.systemIcons.radioOn"
					},
					"states": {
						"unchecked": {
							"component": "components.iconSet.systemIcons.radioOff"
						}
					}
				}
			},
			"miscellaneous": {
				"separator": {
					"visibility": "TRUE",
					"alignment": "CENTER",
					"width": "MATCH_PARENT",
					"color": "themeConfig.styling.colors.lightGreyColor"
				},
				"quickpay": {
					"fullWidthBottomSheet": "FALSE",
					"defaultHeight": 180,
					"contentPadding": "16 16 16 16",
					"overlay": {
						"backgroundColor": "themeConfig.styling.colors.blackColor",
						"opacity": 0.8
					},
					"headerText": {
						"typeface": "themeConfig.styling.text.textStyles.large.typeface",
						"size": "themeConfig.styling.text.textStyles.large.size",
						"weight": "themeConfig.styling.text.textStyles.large.weight",
						"color": "themeConfig.styling.text.textStyles.large.color",
						"content": "Proceed to Pay"
					},
					"icons": {
						"logo": {
							"size": 32,
							"alignment": "LEFT",
							"marginRight": 24,
							"background": {
								"visibility": "FALSE",
								"backgroundColor": "themeConfig.styling.colors.whiteColor",
								"cornerRadius": "themeConfig.styling.cornerRadius",
								"strokeColor": "NULL"
							}
						},
						"networkIcon": {
							"visibility": "TRUE",
							"appendToPrimary": "TRUE",
							"positionWRTText": "AFTER"
						}
					},
					"background": {
						"backgroundColor": "themeConfig.styling.colors.whiteColor",
						"cornerRadius": "themeConfig.styling.cornerRadius",
						"shadow": "themeConfig.styling.shadow"
					},
					"primaryText": {
						"typeface": "themeConfig.styling.text.textStyles.medium.typeface",
						"size": "themeConfig.styling.text.textStyles.medium.size",
						"weight": "themeConfig.styling.text.textStyles.medium.weight",
						"color": "themeConfig.styling.text.textStyles.medium.color"
					},
					"secondaryText": {
						"visibility": "TRUE",
						"appendToPrimary": "FALSE",
						"typeface": "themeConfig.styling.text.textStyles.small.typeface",
						"size": "themeConfig.styling.text.textStyles.small.size",
						"weight": "themeConfig.styling.text.textStyles.small.weight",
						"color": "themeConfig.styling.text.textStyles.small.color",
						"letterSpacing": "themeConfig.styling.text.globalLetteSpacing"
					},
					"amountText": {
						"visibility": "TRUE",
						"typeface": "themeConfig.styling.text.textStyles.small.typeface",
						"size": "themeConfig.styling.text.textStyles.small.size",
						"weight": "themeConfig.styling.text.textStyles.small.weight",
						"color": "themeConfig.styling.text.textStyles.small.color"
					},
					"offerMessage": {
						"component": "components.messaging.offerMessage",
						"visibility": "FALSE"
					},
					"autopayMessage": {
						"component": "components.messaging.autopayMessage",
						"visibility": "FALSE"
					},
					"outageMessage": {
						"component": "components.messaging.outageMessage",
						"visibility": "FALSE"
					},
					"visaOneClickMessage": {
						"component": "components.messaging.visaOneClickMessage",
						"visibility": "FALSE"
					}
				}
			}
		},
		"flowConfig": {
			"enableWidgets": {
				"primaryPI": ["NULL"],
				"offers": {
					"enablePIs": ["ALL"],
					"disablePIs": ["NULL"]
				},
				"autopay": {
					"enablePIs": ["ALL"],
					"disablePIs": ["NULL"]
				},
				"visaOneClick": {
					"enablePIs": ["ALL"],
					"disablePIs": ["NULL"]
				},
				"quickPay": {
					"useJuspayRanking": "TRUE",
					"enablePIs": ["ALL"],
					"disablePIs": ["NULL"]
				},
				"emi": {
					"enablePIs": ["ALL"],
					"disablePIs": ["NULL"]
				},
				"outageManagement": {
					"enablePIs": ["ALL"],
					"disablePIs": ["NULL"]
				},
				"makeDefault": {
					"enable": "TRUE"
				},
				"managePOs": {
					"enable": "TRUE"
				},
				"webGuestUserEnabled": "TRUE",
				"paymentPage": {
					"enable": "TRUE",
					"cards": {
						"enablePIs": ["ALL"],
						"disablePIs": ["NULL"],
						"internationalCardsEnabled": "TRUE"
					},
					"wallets": {
						"enablePIs": ["ALL"],
						"disablePIs": ["NULL"]
					},
					"netbanking": {
						"enablePIs": ["ALL"],
						"disablePIs": ["NULL"]
					},
					"upi": {
						"enable": "TRUE",
						"intent": {
							"enablePIs": ["ALL"],
							"disablePIs": ["NULL"]
						},
						"collect": {
							"webRedirectUPI": "TRUE",
							"enablePIs": ["ALL"],
							"disablePIs": ["NULL"]
						},
						"scanQRnPay": {
							"enablePIs": ["ALL"],
							"disablePIs": ["NULL"]
						}
					}
				}
			},

			"ppHomeScreen": {
				"appBar": {
					"component": "components.containers.appBar",
					"content": "Payment Methods"
				},
				"orderSummary": {
					"component": "components.containers.orderSummary",
					"visibility": "TRUE"
				},
				"offerBar": {
					"component": "components.containers.offerBar",
					"visibility": "TRUE"
				},
				"ppSections": {
					"preferred": {
						"component": "components.containers.list",
						"visibility": "TRUE",
						"items": ["UPI"]
					},
					"saved": {
						"component": "components.containers.list",
						"visibility": "TRUE"
					},
					"offers": {
						"component": "components.containers.list",
						"visibility": "TRUE"
					},
					"default": {
						"component": "components.containers.list",
						"visibility": "TRUE"
					},
					"categories": {
						"isExpanded": "TRUE",
						"collapsedView": {
							"component": "components.containers.list",
							"headerText": {
								"visibility": "TRUE",
								"content": "More Payment Options"
							},
							"cardSection": {
								"component": "components.containers.nonExpandableListItem",
								"content": "Credit / Debit Cards"
							},
							"walletSection": {
								"component": "components.containers.nonExpandableListItem",
								"content": "Wallets"
							},
							"upiSection": {
								"component": "components.containers.nonExpandableListItem",
								"content": "UPI"
							},
							"netbankingSection": {
								"component": "components.containers.nonExpandableListItem",
								"content": "Netbanking"
							}
						},

						"expandedView": {
							"cardSection": {

								"promoted": ["HDFC", "ICICI"],

								"isSavedAndAddCardCombined": "FALSE",

								"savedCards": {
									"component": "components.containers.list",
									"visibility": "TRUE",
									"headerText": {
										"visibility": "TRUE",
										"content": "Cards"
									},
									"expandableListItem": {
										"component": "components.containers.expandableListItem"
									}
								},

								"addCard": {
									"addCardEntry": {
										"component": "components.containers.list",
										"nonExpandableListItem": {
											"component": "components.containers.nonExpandableListItem",
											"content": "Credit / Debit Cards"
										}
									},
									"addCardForm": {
										"component": "components.containers.addCardForm",
										"isAccordion": "FALSE"
									}
								}
							},

							"walletSection": {
								"promoted": ["NULL"],
								"isLinkedUnlinkedCombined": "TRUE",
								"linkedWallets": {
									"visibility": "TRUE",
									"component": "components.containers.list",
									"headerText": {
										"visibility": "TRUE",
										"content": "Wallets"
									},
									"expandableListItem": {
										"component": "components.containers.expandableListItem"
									}
								},

								"unLinkedWallets": {
									"visibility": "TRUE",
									"prefillMobile": "TRUE",
									"component": "components.containers.list",
									"headerText": {
										"visibility": "TRUE",
										"content": "More Wallets"
									},
									"nonExpandableListItem": {
										"component": "components.containers.nonExpandableListItem"
									}
								}
							},

							"upiSection": {
								"promoted": ["NULL"],
								"intent": {
									"visibility": "TRUE",
									"component": "components.containers.grid",
									"headerText": {
										"visibility": "TRUE",
										"content": "UPI Apps"
									},
									"gridItem": {
										"component": "components.containers.gridItem"
									}
								},


								"collect": {
									"visibility": "TRUE",
									"isSavedAndAddUpiCombined": "FALSE",
									"upiIds": {
										"component": "components.containers.list",
										"visibility": "TRUE",
										"headerText": {
											"visibility": "TRUE",
											"content": "Saved UPI IDs"
										},
										"expandableListItem": {
											"component": "components.containers.expandableListItem"
										}
									},
									"addUpiId": {
										"visibility": "TRUE",
										"verifyUpiId": "FALSE",
										"addUpiIdListItem": {
											"component": "components.containers.list",
											"nonExpandableListItem": {
												"component": "components.containers.nonExpandableListItem",
												"content": "Add UPI ID"
											}
										},
										"addUpiIdForm": {
											"component": "components.containers.addUpiIdForm",
											"visibility": "FALSE"
										}
									}
								},
								"scanQRnPay": {}
							},
							"netbankingSection": {
								"promoted": ["NULL"],
								"promotedBanks": {
									"component": "components.containers.grid",
									"headerText": {
										"visibility": "TRUE",
										"content": "UPI Apps"
									},
									"gridItem": {
										"component": "components.containers.gridItem"
									}
								}
							}
						}
					}
				}
			},
			"cardScreen": {
				"appbar": {
					"component": "components.containers.appBar",
					"content": "Add Card"
				},
				"addCardForm": {
					"component": "components.containers.addCardForm"
				},
				"savedCards": {
					"component": "components.containers.list",
					"visibility": "TRUE",
					"headerText": {
						"visibility": "TRUE",
						"content": "Saved Cards"
					},
					"expandableListItem": {
						"component": "components.containers.expandableListItem"
					}
				}
			},
			"walletScreen": {
				"promoted": ["NULL"],
				"isSavedUnsavedCombined": "TRUE",
				"appBar": {
					"component": "components.containers.appBar",
					"content": "Wallets"
				},
				"savedWallet": {
					"component": "components.containers.list"
				},
				"unSavedWallet": {
					"component": "components.containers.list"
				}
			},
			"linkWalletScreen": {
				"appBar": {
					"component": "components.containers.appBar",
					"content": "Link Wallet"
				},
				"linkWalletForm": {
					"component": "components.containers.linkWalletForm"
				}
			},
			"upiScreen": {
				"promoted": ["NULL"],
				"appBar": {
					"component": "components.containers.appBar",
					"content": "UPI"
				},
				"intent": {
					"isGrid": "TRUE",
					"grid": {
						"component": "components.containers.grid",
						"headerText": {
							"visibility": "TRUE",
							"content": "UPI Apps"
						},
						"gridItem": {
							"component": "components.containers.gridItem"
						}
					},
					"list": {
						"component": "components.containers.list",
						"headerText": {
							"visibility": "TRUE",
							"content": "UPI Apps"
						},
						"twoLinelistItem": {
							"component": "components.containers.twoLinelistItem"
						}
					}
				},

				"collect": {
					"isSavedUnsavedCombined": "FALSE",
					"visibility": "TRUE",
					"savedUpiIds": {
						"component": "components.containers.list",
						"visibility": "TRUE",
						"headerText": {
							"visibility": "TRUE",
							"content": "Saved UPI IDs"
						},
						"expandableListItem": {
							"component": "components.containers.expandableListItem"
						}
					},
					"addUpiIdEntry": {
						"visibility": "TRUE",
						"addUpiIdListItem": {
							"component": "components.containers.list",
							"headerText": {
								"visibility": "TRUE",
								"content": "Add UPI ID"
							},
							"nonExpandableListItem": {
								"component": "components.containers.nonExpandableListItem"
							}
						},
						"addUpiIdForm": {
							"component": "components.containers.addUpiIdForm",
							"visibility": "FALSE"
						}
					}
				},
				"scanQRnPay": {}
			},
			"addUpiIdScreen": {
				"appBar": {
					"component": "components.containers.appBar",
					"content": "UPI"
				},
				"addUpiIdForm": {
					"component": "components.containers.addUpiIdForm"
				}
			},
			"netbankingScreen": {
				"promoted": {
					"list": [""],
					"view": {
						"isGrid": "TRUE",
						"grid": {
							"component": "components.containers.grid",
							"headerText": {
								"visibility": "TRUE",
								"content": "Popular Banks"
							},
							"gridItem": {
								"component": "components.containers.gridItem"
							}
						},
						"list": {
							"component": "components.containers.list",
							"headerText": {
								"visibility": "TRUE",
								"content": "Popular Banks"
							},
							"twoLinelistItem": {
								"component": "components.containers.twoLinelistItem"
							}
						}
					}
				},
				"moreBanks": {
					"component": "components.containers.list",
					"twoLinelistItem": {
						"component": "components.containers.twoLinelistItem"
					}
				}
			},
			"quickPayScreen": {
				"component": "components.miscellaneous.quickPay"
			}
		}
	}
